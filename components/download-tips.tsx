const defaultTips = [
  'Use a stable internet connection — a reliable Wi-Fi or mobile data connection keeps processing fast and uninterrupted.',
  'Make sure the video is public — the downloader can only fetch videos that are publicly accessible. Private or restricted videos cannot be processed.',
  'Check the link carefully — always copy the full URL of the actual video page. Gallery links or direct file links will not work with the DeviantArt Video Downloader.',
  'Keep your browser updated — modern browser versions handle media processing more smoothly and securely.',
  'Try a different browser if needed — switching browsers often resolves occasional playback or paste issues instantly.',
]

export function DownloadTips({
  heading = 'Tips for the Best Download Experience',
  intro = 'To get the most out of every download, keep these practical tips in mind.',
  tips = defaultTips,
}: {
  heading?: string
  intro?: string
  tips?: string[]
}) {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold text-foreground">{heading}</h2>
      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{intro}</p>
      <ul className="flex flex-col gap-2">
        {tips.map((tip) => (
          <li
            key={tip}
            className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground"
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  )
}
