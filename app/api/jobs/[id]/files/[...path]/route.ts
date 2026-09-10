import { DOWNLOAD_API_BASE, isValidJobId } from '@/lib/download-api'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string; path: string[] }> },
) {
  const { id, path } = await params

  if (!isValidJobId(id)) {
    return Response.json({ error: 'Invalid job id.' }, { status: 400 })
  }

  const segments = (path ?? []).filter((segment) => segment && segment !== '.' && segment !== '..')

  if (segments.length === 0) {
    return Response.json({ error: 'Missing file path.' }, { status: 400 })
  }

  const filePath = segments.join('/')
  const filename = segments[segments.length - 1]

  try {
    const upstream = await fetch(
      `${DOWNLOAD_API_BASE}/api/jobs/${encodeURIComponent(id)}/files/${encodeURI(filePath)}`,
      { cache: 'no-store' },
    )

    if (!upstream.ok || !upstream.body) {
      return Response.json({ error: 'That file is no longer available.' }, { status: upstream.status || 502 })
    }

    const headers = new Headers({
      'Content-Type': upstream.headers.get('content-type') ?? 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${filename.replace(/"/g, '')}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
      'Cache-Control': 'no-store',
    })

    const length = upstream.headers.get('content-length')
    if (length) headers.set('Content-Length', length)

    return new Response(upstream.body, { status: 200, headers })
  } catch {
    return Response.json({ error: 'Could not download the file. Please try again.' }, { status: 502 })
  }
}
