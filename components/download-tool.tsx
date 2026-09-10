'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertCircle, CheckCircle2, Download, FileVideo, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { isDeviantArtUrl } from '@/lib/download-api'
import { cn } from '@/lib/utils'

type Status = { type: 'idle' | 'working' | 'error' | 'success'; message: string }
type ReadyFile = { name: string; href: string }

const POLL_ATTEMPTS = 90
const POLL_INTERVAL = 1000
const CREATE_ATTEMPTS = 3
const MAX_TRANSIENT_FAILURES = 8
const REQUEST_TIMEOUT = 20000

const CONNECTION_MESSAGE = 'Could not reach the server. Check your connection and try again.'

/** Network drops, timeouts and 5xx responses are all worth retrying rather than failing the job. */
class TransientError extends Error {}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function buildFileHref(jobId: string, path: string) {
  const encoded = path.split('/').filter(Boolean).map(encodeURIComponent).join('/')
  return `/api/jobs/${encodeURIComponent(jobId)}/files/${encoded}`
}

async function requestJson<T extends { error?: string }>(
  url: string,
  init?: RequestInit,
): Promise<{ ok: boolean; data: T | null }> {
  let res: Response

  try {
    res = await fetch(url, { ...init, signal: AbortSignal.timeout(REQUEST_TIMEOUT) })
  } catch {
    // Rejects when offline, on timeout, or while the server is restarting.
    throw new TransientError(CONNECTION_MESSAGE)
  }

  const data = (await res.json().catch(() => null)) as T | null

  // 5xx means the service hiccuped; the job upstream may still be fine.
  if (res.status >= 500) throw new TransientError(data?.error || CONNECTION_MESSAGE)

  return { ok: res.ok, data }
}

export function DownloadTool() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' })
  const [files, setFiles] = useState<ReadyFile[]>([])

  // Guards against a stale run writing state after a new one starts or after unmount.
  const runRef = useRef(0)

  useEffect(() => {
    return () => {
      runRef.current += 1
    }
  }, [])

  async function handleDownload() {
    const value = url.trim()

    if (!value) {
      setStatus({ type: 'error', message: 'Please paste a DeviantArt video URL first.' })
      return
    }

    if (!isDeviantArtUrl(value)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid DeviantArt URL (e.g. https://www.deviantart.com/...).',
      })
      return
    }

    const run = runRef.current + 1
    runRef.current = run
    const isStale = () => runRef.current !== run

    setLoading(true)
    setFiles([])
    setStatus({ type: 'working', message: 'Starting download…' })

    try {
      // --- Create the job, retrying through transient connection failures. ---
      let jobId: string | null = null
      let createError = CONNECTION_MESSAGE

      for (let attempt = 1; attempt <= CREATE_ATTEMPTS; attempt++) {
        try {
          const { ok, data } = await requestJson<{ id?: string; error?: string }>('/api/jobs/', {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: value }),
          })
          if (isStale()) return

          // A 4xx is a real rejection (bad URL, etc.) — no point retrying.
          if (!ok || !data?.id) {
            setStatus({ type: 'error', message: data?.error || 'Could not start the download.' })
            return
          }

          jobId = data.id
          break
        } catch (err) {
          if (isStale()) return
          createError = err instanceof TransientError ? err.message : CONNECTION_MESSAGE

          if (attempt < CREATE_ATTEMPTS) {
            setStatus({ type: 'working', message: 'Reconnecting…' })
            await sleep(attempt * 1000)
            if (isStale()) return
          }
        }
      }

      if (!jobId) {
        setStatus({ type: 'error', message: createError })
        return
      }

      // --- Poll for completion, tolerating brief connection blips. ---
      setStatus({ type: 'working', message: 'Fetching video… this can take up to a minute.' })
      let transientFailures = 0

      for (let attempt = 0; attempt < POLL_ATTEMPTS; attempt++) {
        await sleep(POLL_INTERVAL)
        if (isStale()) return

        let payload: { status?: string; files?: string[]; error?: string } | null = null
        let ok = false

        try {
          const result = await requestJson<{ status?: string; files?: string[]; error?: string }>(
            `/api/jobs/${jobId}/`,
            { headers: { Accept: 'application/json' } },
          )
          if (isStale()) return
          ok = result.ok
          payload = result.data
          transientFailures = 0
        } catch (err) {
          if (isStale()) return
          transientFailures += 1

          if (transientFailures >= MAX_TRANSIENT_FAILURES) {
            setStatus({
              type: 'error',
              message: err instanceof TransientError ? err.message : CONNECTION_MESSAGE,
            })
            return
          }

          setStatus({ type: 'working', message: 'Reconnecting…' })
          continue
        }

        if (!ok) {
          setStatus({ type: 'error', message: payload?.error || 'Could not check the download status.' })
          return
        }

        if (payload?.status === 'done') {
          const ready = (payload.files ?? []).map((path) => ({
            name: path.split('/').pop() || 'video.mp4',
            href: buildFileHref(jobId, path),
          }))

          if (ready.length === 0) {
            setStatus({ type: 'error', message: 'No downloadable video was found on that page.' })
            return
          }

          setFiles(ready)
          setStatus({
            type: 'success',
            message: ready.length === 1 ? 'Your video is ready.' : `${ready.length} files are ready.`,
          })
          return
        }

        if (payload?.status === 'error') {
          setStatus({
            type: 'error',
            message: payload.error || 'That video could not be downloaded. Try another URL.',
          })
          return
        }

        setStatus({ type: 'working', message: 'Fetching video… this can take up to a minute.' })
      }

      setStatus({ type: 'error', message: 'This is taking longer than expected. Please try again.' })
    } catch {
      if (!isStale()) setStatus({ type: 'error', message: CONNECTION_MESSAGE })
    } finally {
      if (!isStale()) setLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      handleDownload()
    }
  }

  return (
    <section className="mx-auto max-w-xl px-4">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-2xl shadow-black/20 sm:p-6">
        <label htmlFor="videoUrl" className="mb-2 block text-sm font-semibold text-muted-foreground">
          Paste DeviantArt Video URL
        </label>
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <Input
            id="videoUrl"
            type="text"
            inputMode="url"
            placeholder="https://www.deviantart.com/.../video"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-12 flex-1 rounded-xl border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/20"
          />
          <Button
            onClick={handleDownload}
            disabled={loading}
            size="lg"
            className="h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:from-primary hover:to-primary"
          >
            {loading ? (
              <Loader2 className="size-4 animate-spin" data-icon="inline-start" aria-hidden="true" />
            ) : (
              <Download className="size-4" data-icon="inline-start" aria-hidden="true" />
            )}
            Download
          </Button>
        </div>
        <p
          role="status"
          aria-live="polite"
          className={cn(
            'mt-3 min-h-5 text-center text-sm',
            status.type === 'success' && 'text-emerald-400',
            status.type === 'error' && 'text-red-400',
            (status.type === 'idle' || status.type === 'working') && 'text-muted-foreground',
          )}
        >
          {status.type === 'success' && <CheckCircle2 className="mr-1 inline size-4" aria-hidden="true" />}
          {status.type === 'error' && <AlertCircle className="mr-1 inline size-4" aria-hidden="true" />}
          {status.message}
        </p>

        {files.length > 0 && (
          <ul className="mt-1 flex flex-col gap-2">
            {files.map((file) => (
              <li key={file.href}>
                <a
                  href={file.href}
                  download={file.name}
                  className="flex items-center gap-2.5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-primary/15"
                >
                  <FileVideo className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate">{file.name}</span>
                  <Download className="size-4 shrink-0 text-primary" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
