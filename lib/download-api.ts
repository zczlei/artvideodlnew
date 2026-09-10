export const DOWNLOAD_API_BASE = 'https://tool.umebro.com/dl'

/** Job ids returned by the upstream service are short hex strings. */
export function isValidJobId(id: string): boolean {
  return /^[a-zA-Z0-9_-]{1,64}$/.test(id)
}

/** Only allow DeviantArt links through the proxy so it can't be used as an open relay. */
export function isDeviantArtUrl(value: string): boolean {
  try {
    const parsed = new URL(value)
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return false
    const host = parsed.hostname.toLowerCase()
    return host === 'deviantart.com' || host.endsWith('.deviantart.com')
  } catch {
    return false
  }
}
