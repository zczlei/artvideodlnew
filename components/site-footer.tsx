import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/online/', label: 'Online Downloader' },
  { href: '/video-download/', label: 'Video Download' },
  { href: '/dmca/', label: 'DMCA' },
  { href: '/privacy/', label: 'Privacy' },
]

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border px-4 py-8 text-center">
      <nav className="mb-3 flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm text-muted-foreground">
        {footerLinks.map((link, i) => (
          <span key={link.href} className="flex items-center gap-1">
            <Link href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
            {i < footerLinks.length - 1 && <span className="px-1 text-muted-foreground/50">·</span>}
          </span>
        ))}
      </nav>
      <p className="text-xs text-muted-foreground/70">
        {'© 2026 ArtVideoDL.com — Free DeviantArt Video Downloader. For personal use only. Respect artists\u2019 rights.'}
      </p>
    </footer>
  )
}
