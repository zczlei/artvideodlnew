import { DOWNLOAD_API_BASE, isDeviantArtUrl } from '@/lib/download-api'

export const runtime = 'edge'

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const raw = (payload as { url?: unknown } | null)?.url
  const url = typeof raw === 'string' ? raw.trim() : ''

  if (!url) {
    return Response.json({ error: 'Please paste a DeviantArt video URL first.' }, { status: 400 })
  }

  if (!isDeviantArtUrl(url)) {
    return Response.json(
      { error: 'Please enter a valid DeviantArt URL (e.g. https://www.deviantart.com/...).' },
      { status: 400 },
    )
  }

  try {
    const upstream = await fetch(`${DOWNLOAD_API_BASE}/api/jobs`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
      cache: 'no-store',
    })

    const data = (await upstream.json().catch(() => null)) as
      | { id?: string; detail?: string; error?: string }
      | null

    if (!upstream.ok || !data?.id) {
      return Response.json(
        { error: data?.detail || data?.error || 'Could not start the download.' },
        { status: upstream.ok ? 502 : upstream.status },
      )
    }

    return Response.json({ id: data.id }, { headers: { 'Cache-Control': 'no-store' } })
  } catch {
    return Response.json(
      { error: 'Could not reach the download service. Please try again.' },
      { status: 502 },
    )
  }
}
