import type { Metadata } from 'next'
import { FileVideo, HardDrive, Lock, Monitor, Music, ShieldOff, Share2, Zap } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/hero-section'
import { DownloadTool } from '@/components/download-tool'
import { HowToSteps } from '@/components/how-to-steps'
import { WhyChoose } from '@/components/why-choose'
import { FormatInfo } from '@/components/format-info'
import { DownloadTips } from '@/components/download-tips'
import { RelatedTools } from '@/components/related-tools'
import { FaqSection, type Faq } from '@/components/faq-section'
import { PageStructuredData } from '@/components/structured-data'

const pageUrl = 'https://artvideodl.com/video-download/'

export const metadata: Metadata = {
  title: 'DeviantArt Video Download - Fast & Free',
  description:
    'Download DeviantArt videos fast and free. Paste a link, save MP4 in original quality. No sign up, no watermark — works on all devices.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'DeviantArt Video Download - Fast & Free',
    description:
      'Download DeviantArt videos fast and free. Paste a link, save MP4 in original quality. No sign up, no watermark.',
    siteName: 'ArtVideoDL',
  },
}

const steps = [
  {
    title: 'Copy the Video Page URL',
    description:
      "Open DeviantArt in your browser, navigate to the video you want, and copy the full URL from the address bar. Make sure you're on the video's own page. The URL should look like https://www.deviantart.com/username/art/video-title.",
  },
  {
    title: 'Paste the Link Above',
    description:
      'Paste the URL into the input box at the top of this page and click the Download button. Our tool processes the link and locates the original video file — typically in under a second.',
  },
  {
    title: 'Save Your MP4 File',
    description:
      "Click the save button when it appears. The video downloads to your device in MP4 format at the highest resolution available on the original post. That's it — no watermark, no compression, no hidden steps.",
  },
]

const reasons = [
  {
    icon: Monitor,
    title: 'Plays Everywhere',
    description:
      'iPhone, Android, Windows, Mac, smart TVs, game consoles. If a device can play video, it can play MP4.',
  },
  {
    icon: Zap,
    title: 'Keeps Original Quality',
    description:
      "Our downloader doesn't recompress the file. The video you save is what the artist uploaded, at the same resolution and bitrate.",
  },
  {
    icon: Share2,
    title: 'Easy to Share',
    description:
      'MP4 is the standard format for messaging apps, social media, and email. No conversion needed before sending.',
  },
  {
    icon: HardDrive,
    title: 'Smaller Than Raw Files',
    description:
      'DeviantArt videos are already encoded efficiently. Saving them as MP4 keeps the file size reasonable while preserving quality.',
  },
  {
    icon: ShieldOff,
    title: 'Clean, Unbranded File',
    description: "Some downloaders stamp their logo on the video. We don't. The file is clean and ready for your own use.",
  },
]

const formats = [
  {
    icon: FileVideo,
    title: 'Original Resolution',
    description: 'You receive the video at the exact resolution the artist uploaded — no upscaling, no downscaling.',
  },
  {
    icon: Music,
    title: 'Original Audio',
    description: 'If the DeviantArt video has sound, the audio track is included in full, without re-encoding.',
  },
  {
    icon: Lock,
    title: 'MP4 Container',
    description: 'The file is wrapped in a standard MP4 container with H.264 video, which is the most compatible encoding.',
  },
]

const tips = [
  'Copy the URL from the video page itself — links copied from the DeviantArt home feed or a user\u2019s gallery may not point to the actual video file. Open the video first, then copy.',
  "Public videos only — private, friends-only, or mature-restricted videos can't be downloaded by the tool. Try signing in to DeviantArt in your browser first.",
  'Watch for short URLs — if DeviantArt gave you a shortened URL, expand it first, then paste a full link.',
  'Refresh if you get a broken download — DeviantArt videos occasionally load slowly. Try again after 5-10 seconds before assuming the link is wrong.',
  'Large files take longer — a 4K video will take more time to process than a 720p one. The status message will let you know the file is still being prepared.',
]

const faqs: Faq[] = [
  {
    question: 'How fast can I download a DeviantArt video?',
    answer:
      'Most clips are ready to save within a few seconds of pasting the link. Longer or higher-resolution videos take a bit more time to process, but there is no artificial queue or waiting period added on our end.',
  },
  {
    question: 'Can I download an entire DeviantArt video in original quality?',
    answer:
      "Yes — the full-length video is downloaded exactly as it was posted, start to finish, at the artist's original resolution. Nothing is trimmed, resized, or recompressed during the process.",
  },
  {
    question: 'What devices can I download to?',
    answer:
      'The MP4 file saves the same way on Windows, Mac, Linux, Android, and iOS — wherever your browser can save a file, this tool works. There is no separate app needed for any platform.',
  },
  {
    question: "Why isn't my download starting?",
    answer:
      "The most common cause is an incomplete or shortened URL — make sure you copied the link straight from the video's own page, not a shared or trimmed version. If the post has been deleted or made private since you copied it, the download will also fail.",
  },
  {
    question: 'Can I choose MP4 resolution before downloading?',
    answer:
      'The tool downloads the video at the single resolution the artist originally uploaded — DeviantArt does not offer multiple quality tiers for most video posts, so there is nothing to select beforehand.',
  },
  {
    question: 'Where does the downloaded video get saved on my phone or computer?',
    answer:
      "The MP4 lands wherever your browser's default download location is set — typically a Downloads folder on desktop, or your Photos/Files app on mobile. You can change this in your browser's settings if you'd like a different folder.",
  },
  {
    question: 'Does downloading a video use a lot of data on my mobile plan?',
    answer:
      'Data usage scales with the video length and quality, similar to streaming it once. A short clip uses only a few megabytes, while a longer HD video can use considerably more — connecting to Wi-Fi first is a good habit for larger files.',
  },
  {
    question: 'Can I share the downloaded MP4 directly to social media?',
    answer:
      'Yes — since the file saves as a standard MP4, you can attach it to a message, upload it to social platforms, or drop it into a group chat without needing to convert it first.',
  },
]

export default function VideoDownloadPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection
          title="DeviantArt Video Download"
          subtitle="Download DeviantArt videos in MP4 at original quality. No sign up, no watermark — save any public video in seconds."
          pills={[
            { icon: Zap, label: 'Fast Download' },
            { icon: FileVideo, label: 'MP4 Format' },
            { icon: Lock, label: 'No Sign Up' },
            { icon: ShieldOff, label: 'No Watermark' },
          ]}
        />

        <div className="px-4 pb-10">
          <DownloadTool />
        </div>

        <div className="mx-auto flex max-w-2xl flex-col gap-10 px-4 pb-14">
          <HowToSteps
            heading="How to Download DeviantArt Videos Fast"
            intro="Getting an MP4 onto your device takes three steps, start to finish — copy the link, drop it in above, and save the file."
            steps={steps}
          />
          <WhyChoose
            heading="Why Download DeviantArt Videos as MP4?"
            intro="MP4 is the most widely supported video format in the world. Here's why it's the right choice for saving DeviantArt videos:"
            reasons={reasons}
          />
          <FormatInfo
            heading="What Download Quality Can You Expect?"
            intro="Every DeviantArt video download keeps the file exactly as the artist uploaded it — here's what that means in practice."
            formats={formats}
          />
          <DownloadTips heading="Tips for Reliable Downloads" tips={tips} />
          <RelatedTools currentPath="/video-download/" />
          <FaqSection items={faqs} />
        </div>
      </main>

      <SiteFooter />
      <PageStructuredData
        path="/video-download/"
        webAppName="DeviantArt Video Download"
        webAppDescription="Download DeviantArt videos fast and free. Paste a link, save MP4 in original quality. No sign up, no watermark."
        breadcrumbName="DeviantArt Video Download"
        howToName="How to Download DeviantArt Videos Fast"
        howToDescription="Download DeviantArt videos in MP4 at original quality in three simple steps."
        howToSteps={[
          {
            name: 'Copy the Video Page URL',
            text: "Open DeviantArt in your browser, navigate to the video you want, and copy the full URL from the address bar. It should look like https://www.deviantart.com/username/art/video-title.",
          },
          {
            name: 'Paste the Link Above',
            text: 'Paste the URL into the input box at the top of the page and click the Download button. Our tool processes the link and locates the original video file.',
          },
          {
            name: 'Save Your MP4 File',
            text: "Click the save button when it appears. The video downloads to your device in MP4 format at the highest resolution available on the original post.",
          },
        ]}
        faqs={faqs}
      />
    </div>
  )
}
