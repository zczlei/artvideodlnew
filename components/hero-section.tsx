import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Lock, Smartphone, Zap, type LucideIcon } from 'lucide-react'

type Pill = { icon: LucideIcon; label: string }

const defaultPills: Pill[] = [
  { icon: CheckCircle2, label: 'Free Forever' },
  { icon: Lock, label: 'No Sign Up' },
  { icon: Smartphone, label: 'Works on Mobile' },
  { icon: Zap, label: 'Fast Download' },
]

export function HeroSection({
  title = 'DeviantArt Video Downloader',
  subtitle = 'This free DeviantArt Video Downloader saves DeviantArt videos as MP4. No sign up, no watermark, no limits.',
  pills = defaultPills,
}: {
  title?: string
  subtitle?: string
  pills?: Pill[]
}) {
  return (
    <section className="mx-auto max-w-2xl px-4 pt-12 pb-8 text-center sm:pt-16">
      <h1 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-balance text-base text-muted-foreground">{subtitle}</p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {pills.map((pill) => (
          <Badge
            key={pill.label}
            variant="secondary"
            className="gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-normal text-muted-foreground"
          >
            <pill.icon className="size-3.5 text-primary" aria-hidden="true" />
            {pill.label}
          </Badge>
        ))}
      </div>
    </section>
  )
}
