import { DOWNLOAD_API_BASE, isValidJobId } from '@/lib/download-api'

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  if (!isValidJobId(id)) {
    return Response.json({ error: 'Invalid job id.' }, { status: 400 })
  }

  try {
    const upstream = await fetch(`${DOWNLOAD_API_BASE}/api/jobs/${encodeURIComponent(id)}`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    })

    const data = (await upstream.json().catch(() => null)) as
      | { status?: string; files?: unknown; error?: string; detail?: string }
      | null

    if (!upstream.ok || !data) {
      return Response.json(
        { error: data?.detail || data?.error || 'Could not check the download status.' },
        { status: upstream.ok ? 502 : upstream.status },
      )
    }

    const files = Array.isArray(data.files) ? data.files.filter((f): f is string => typeof f === 'string') : []

    return Response.json(
      { status: data.status ?? 'running', files, error: data.error ?? null },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  } catch {
    return Response.json(
      { error: 'Could not reach the download service. Please try again.' },
      { status: 502 },
    )
  }
}
