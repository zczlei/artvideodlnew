'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Film } from 'lucide-react'
import { navLinks } from '@/lib/site-config'
import { cn } from '@/lib/utils'

function normalize(path: string) {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
  return path
}

export function SiteHeader() {
  const pathname = usePathname()
  const current = normalize(pathname ?? '/')

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-extrabold tracking-tight text-accent-foreground"
        >
          <Film className="size-5 text-primary" aria-hidden="true" />
          <span>
            ArtVideo<span className="font-normal text-muted-foreground">DL</span>
          </span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1.5 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = current === normalize(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'rounded-lg border px-3 py-2 text-sm font-semibold whitespace-nowrap transition-colors sm:px-4',
                  isActive
                    ? 'border-primary/60 bg-primary/15 text-primary'
                    : 'border-border/70 text-foreground hover:border-primary/40 hover:bg-secondary hover:text-primary',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
