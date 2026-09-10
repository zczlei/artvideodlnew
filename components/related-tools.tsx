import Link from 'next/link'
import { allTools } from '@/lib/site-config'

export function RelatedTools({ currentPath = '/' }: { currentPath?: string }) {
  const tools = allTools.filter((tool) => tool.href !== currentPath)

  return (
    <div>
      <h2 className="mb-3 text-xl font-bold text-foreground">More Free DeviantArt Tools</h2>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-accent-foreground"
          >
            {tool.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
