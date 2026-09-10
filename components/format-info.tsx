import { FileVideo, Gauge, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react'

type Format = { icon: LucideIcon; title: string; description: string }

const defaultFormats: Format[] = [
  {
    icon: FileVideo,
    title: 'MP4',
    description: 'Standard format, works on all devices — iPhone, Android, PC, and Mac.',
  },
  {
    icon: Gauge,
    title: 'Original Quality',
    description: 'Downloads at the highest resolution available on DeviantArt.',
  },
  {
    icon: ShieldCheck,
    title: 'No Watermark',
    description: 'We never add watermarks to your downloaded videos.',
  },
  {
    icon: Sparkles,
    title: 'No Compression',
    description: 'You get the exact same file DeviantArt serves.',
  },
]

export function FormatInfo({
  heading = 'Supported Formats & Quality',
  intro = "The DeviantArt Video Downloader saves every clip at its original quality — here's exactly what you get.",
  formats = defaultFormats,
}: {
  heading?: string
  intro?: string
  formats?: Format[]
}) {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold text-foreground">{heading}</h2>
      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{intro}</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {formats.map((format) => (
          <li key={format.title} className="rounded-xl border border-border bg-card p-4">
            <format.icon className="mb-2 size-5 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-foreground">{format.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{format.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
