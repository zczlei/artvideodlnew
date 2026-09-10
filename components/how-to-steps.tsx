type Step = { title: string; description: string }

const defaultSteps: Step[] = [
  {
    title: 'Copy the DeviantArt Video URL',
    description:
      "Go to DeviantArt and find the video you want to download. Open it in full view, then copy the complete URL from your browser's address bar. The link should start with deviantart.com and point to the specific video page — not a gallery or collection — so the tool can correctly identify the video source.",
  },
  {
    title: 'Paste the Link and Click Download',
    description:
      'Paste the copied URL into the input box above and click the Download button. The downloader instantly processes the link and fetches the video source, usually within a few seconds depending on the file size.',
  },
  {
    title: 'Save Your MP4 Video',
    description:
      'Once the video is ready, click to save the MP4 file directly to your device — computer, phone, or tablet. The downloaded video keeps the highest quality available, with no watermark added by our tool.',
  },
]

export function HowToSteps({
  heading = 'How to Use the DeviantArt Video Downloader',
  intro = 'Our tool makes it easy to save any video from DeviantArt to your device. The entire process takes less than a minute and requires no technical knowledge or software installs. Just follow these three simple steps:',
  steps = defaultSteps,
}: {
  heading?: string
  intro?: string
  steps?: Step[]
}) {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold text-foreground">{heading}</h2>
      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{intro}</p>
      <ol className="flex flex-col gap-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-4"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-extrabold text-primary">
              {i + 1}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
