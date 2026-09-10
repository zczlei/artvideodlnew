import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/hero-section'
import { DownloadTool } from '@/components/download-tool'
import { HowToSteps } from '@/components/how-to-steps'
import { FormatInfo } from '@/components/format-info'
import { WhyChoose } from '@/components/why-choose'
import { SupportedDevices } from '@/components/supported-devices'
import { DownloadTips } from '@/components/download-tips'
import { RelatedTools } from '@/components/related-tools'
import { FaqSection } from '@/components/faq-section'
import { HomeStructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'DeviantArt Video Downloader - Free Online Tool',
  description:
    'Download DeviantArt videos online for free. No sign up, no watermark. Save MP4 videos from DeviantArt to your device in seconds. Fast, free, works on all browsers.',
  alternates: {
    canonical: 'https://artvideodl.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://artvideodl.com/',
    title: 'DeviantArt Video Downloader - Free Online Tool',
    description:
      'Download DeviantArt videos online for free. No sign up, no watermark. Fast, free, works on all browsers.',
    siteName: 'ArtVideoDL',
  },
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />

        <div className="px-4 pb-10">
          <DownloadTool />
        </div>

        <div className="mx-auto flex max-w-2xl flex-col gap-10 px-4 pb-14">
          <HowToSteps />
          <FormatInfo />
          <WhyChoose />
          <SupportedDevices />
          <DownloadTips />
          <RelatedTools />
          <FaqSection />
        </div>
      </main>

      <SiteFooter />
      <HomeStructuredData />
    </div>
  )
}
