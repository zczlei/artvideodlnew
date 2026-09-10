import { Ban, Gauge, Globe, ShieldCheck, Smartphone, Wallet, type LucideIcon } from 'lucide-react'

type Reason = { icon: LucideIcon; title: string; description: string }

const defaultReasons: Reason[] = [
  {
    icon: Wallet,
    title: '100% Free',
    description:
      'No hidden fees, no premium subscriptions, and no "credits" system. Download unlimited videos without ever paying a cent — a good tool should be accessible to everyone.',
  },
  {
    icon: Ban,
    title: 'No Registration',
    description:
      'You never need to create an account, verify an email, or hand over personal information. Just paste a link and download. We do not collect or store your data.',
  },
  {
    icon: Globe,
    title: 'Works Online',
    description:
      'The entire tool runs in your browser — nothing to install, no software, no extensions. It works on any modern browser including Chrome, Firefox, Safari, and Edge.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description:
      'Fully responsive and works perfectly on Android phones, iPhones, and iPads. Download DeviantArt videos on the go, wherever you are.',
  },
  {
    icon: Gauge,
    title: 'Fast Processing',
    description:
      'The downloader resolves video URLs instantly. Most downloads are ready within seconds — no queues, no countdown timers, no artificial delays.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description:
      'We do not store your downloaded videos or inject malware or adware, and every connection uses HTTPS encryption to keep your session private.',
  },
]

export function WhyChoose({
  heading = 'Why Choose Our DeviantArt Video Downloader?',
  intro = 'There are many downloader tools online, but here is what sets our free service apart from the rest.',
  reasons = defaultReasons,
}: {
  heading?: string
  intro?: string
  reasons?: Reason[]
}) {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold text-foreground">{heading}</h2>
      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{intro}</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {reasons.map((reason) => (
          <li key={reason.title} className="rounded-xl border border-border bg-card p-4">
            <reason.icon className="mb-2 size-5 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-foreground">{reason.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
