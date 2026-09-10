import { ChevronDown } from 'lucide-react'

export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: 'Is the DeviantArt Video Downloader free?',
    answer:
      'Yes, the downloader is completely free. No hidden fees, no premium tiers required to download. You can save as many videos as you want at no cost.',
  },
  {
    question: 'Do I need a DeviantArt account to use this?',
    answer:
      'No account or login is required. As long as the video is publicly accessible, our service can fetch it.',
  },
  {
    question: 'Does it work on mobile (Android / iPhone)?',
    answer:
      'Yes. ArtVideoDL works directly in your mobile browser — no app install needed. Works on Android, iPhone, iPad, and any device with a web browser.',
  },
  {
    question: 'What format do downloaded videos come in?',
    answer:
      'Everything is downloaded as MP4 — the most widely supported video format. Plays on every device without extra software.',
  },
  {
    question: 'Does this tool work on Firefox / Chrome / other browsers?',
    answer:
      'Yes. Our downloader works on all modern browsers including Chrome, Firefox, Safari, and Edge. No extension or plugin needed.',
  },
  {
    question: 'Are there any download limits?',
    answer: 'No daily limits on downloads. Save as many videos as you want, whenever you want.',
  },
  {
    question: 'Is this legal? What about copyright?',
    answer:
      'This tool is for downloading your own content or publicly available videos you have permission to download. Please respect artists\u2019 copyrights — do not redistribute downloaded content without permission.',
  },
  {
    question: 'Can I download mature-flagged DeviantArt content?',
    answer:
      'The downloader can only access publicly available content. If a post requires sign-in to view (including mature-filtered content), it cannot be fetched through our service.',
  },
]

export function FaqSection({
  heading = 'Frequently Asked Questions',
  items = faqs,
}: {
  heading?: string
  items?: Faq[]
}) {
  return (
    <div>
      <h2 className="mb-1 text-xl font-bold text-foreground">{heading}</h2>
      <div className="flex flex-col">
        {items.map((faq) => (
          <details key={faq.question} className="group not-last:border-b border-border py-2.5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-left text-sm font-medium text-foreground outline-none hover:underline focus-visible:underline">
              {faq.question}
              <ChevronDown
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <p className="pt-2.5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
