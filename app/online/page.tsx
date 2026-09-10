import type { Metadata } from 'next'
import { Ban, CheckCircle2, Laptop, Lock, RefreshCw, Smartphone, Trash2 } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/hero-section'
import { DownloadTool } from '@/components/download-tool'
import { HowToSteps } from '@/components/how-to-steps'
import { WhyChoose } from '@/components/why-choose'
import { SupportedDevices } from '@/components/supported-devices'
import { DownloadTips } from '@/components/download-tips'
import { RelatedTools } from '@/components/related-tools'
import { FaqSection, type Faq } from '@/components/faq-section'
import { PageStructuredData } from '@/components/structured-data'

const pageUrl = 'https://artvideodl.com/online/'

export const metadata: Metadata = {
  title: 'DeviantArt Video Downloader Online - No Sign Up',
  description:
    'Use the DeviantArt video downloader online — paste a link, get MP4, no sign up required. Fast, free, works on all browsers and devices.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'DeviantArt Video Downloader Online - No Sign Up',
    description:
      'Use the DeviantArt video downloader online — paste a link, get MP4, no sign up required. Fast, free, works on all browsers.',
    siteName: 'ArtVideoDL',
  },
}

const steps = [
  {
    title: 'Open the Video Page on DeviantArt',
    description:
      "Go to deviantart.com and open the video you want to save. Make sure it's a public video post and open in its own page — not embedded in a browsing feed. Copy the full URL from your browser's address bar. It should look like https://www.deviantart.com/username/art/video-title.",
  },
  {
    title: 'Paste the Link Right Here',
    description:
      'Come back to this page, paste the copied URL into the input box above, and click the Download button. The tool fetches the video source directly — no account, no install, no waiting.',
  },
  {
    title: 'Save the MP4 to Your Device',
    description:
      'When the download is ready, click the save button. The file downloads as an MP4 in the highest quality available on the original post. No watermark is ever added, and the file is ready to watch or share immediately.',
  },
]

const reasons = [
  {
    icon: Ban,
    title: 'Nothing to Install',
    description: 'No setup files, no dependencies, no system requirements. You just open this page and paste a link.',
  },
  {
    icon: Smartphone,
    title: 'Works on Every Device',
    description: 'Android, iPhone, iPad, Windows, Mac, Linux, Chromebook. If it has a browser, it works.',
  },
  {
    icon: Lock,
    title: 'No Account or Sign-Up',
    description:
      'The moment you leave this page, no data about you stays behind. There is no profile to create, no email to confirm, no password to remember.',
  },
  {
    icon: RefreshCw,
    title: 'Never Goes Out of Date',
    description:
      "Desktop apps break when operating systems update. Online tools always run the latest version because you're using it live.",
  },
  {
    icon: Trash2,
    title: 'Leaves No Trace',
    description: "Nothing is installed on your device, so there's nothing to uninstall later.",
  },
]

const devices = [
  {
    title: 'Desktop',
    description: 'Windows, Mac, Linux — works in Chrome, Firefox, Safari, Edge, Opera, and Brave.',
  },
  {
    title: 'Mobile',
    description: 'Android and iOS phones & tablets. Works in all mobile browsers with a responsive interface.',
  },
  {
    title: 'No App Required',
    description: 'No Play Store or App Store download needed. The tool runs 100% in your browser.',
  },
]

const tips = [
  "Use the video's own page URL — if the video is embedded in someone's gallery or journal, open it first and copy the URL from its own page. It makes the download more reliable.",
  "The video must be public — private or friends-only DeviantArt posts can't be fetched by our tool. That's a privacy protection, not a bug.",
  'Make sure the link ends with the video title — URLs like /art/video-title are the ones that work reliably.',
  "Try again if the download fails — occasionally DeviantArt's servers respond slowly. Just paste the URL again after a few seconds.",
  'Use a current browser — old browsers may block downloads. Keep your browser updated for the smoothest experience.',
]

const faqs: Faq[] = [
  {
    question: 'Can I use the DeviantArt video downloader online without installing anything?',
    answer:
      "Yes. This page is the entire tool — there's nothing to download, unzip, or run on your computer first. Open it in your browser, drop in a video link, and the conversion happens on our end while you wait.",
  },
  {
    question: 'Is it safe to use an online DeviantArt video downloader?',
    answer:
      "We don't ask for your DeviantArt password, email, or any personal details — the only thing the tool touches is the video link you paste in. Nothing you enter here is linked back to your DeviantArt account.",
  },
  {
    question: 'Why should I use an online downloader instead of desktop software?',
    answer:
      "Desktop tools need to be downloaded, granted permissions, and updated whenever they break — some also bundle unwanted extras. A browser-based downloader skips all of that: open the tab, run the job, close the tab when you're done.",
  },
  {
    question: 'Do I need a fast internet connection to use the online downloader?',
    answer:
      'A standard broadband or mobile connection is enough for most DeviantArt clips. Larger or longer videos simply take a little more time to process — there is no minimum speed requirement to use the tool itself.',
  },
  {
    question: 'Can I use the online downloader on a public or shared computer?',
    answer:
      "Yes, since the tool doesn't require sign-in or store any account details, it's safe to use on a library, school, or work computer. Just remember to clear your browser's download folder afterward if the device is shared.",
  },
  {
    question: 'Does the online downloader keep a history of my downloaded videos?',
    answer:
      'No. We do not keep a dashboard, download log, or account history of what you have converted. Once your MP4 is saved to your device, our side of the process is finished.',
  },
  {
    question: 'Will the online downloader work if DeviantArt is blocked in my country?',
    answer:
      "If deviantart.com itself is inaccessible from your network, our tool cannot reach the video either, since it needs to fetch the file from DeviantArt's own servers. A VPN or different network is the usual workaround in that situation.",
  },
  {
    question: 'Can I bookmark this online downloader page for quick access?',
    answer:
      "Absolutely — bookmark this page and it's ready whenever you need it. Since everything runs live in your browser, there is nothing to reinstall or update between visits.",
  },
]

export default function OnlinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection
          title="DeviantArt Video Downloader Online"
          subtitle="Download DeviantArt videos online in MP4. No installation, no registration — works in any browser on any device."
          pills={[
            { icon: CheckCircle2, label: '100% Online' },
            { icon: Lock, label: 'No Sign Up' },
            { icon: Laptop, label: 'No Install' },
            { icon: Smartphone, label: 'Any Device' },
          ]}
        />

        <div className="px-4 pb-10">
          <DownloadTool />
        </div>

        <div className="mx-auto flex max-w-2xl flex-col gap-10 px-4 pb-14">
          <HowToSteps
            heading="How to Use This Online DeviantArt Video Downloader"
            intro="No app to open, no software to launch — this page is the tool. Open it in your browser and follow these three steps to save a DeviantArt video."
            steps={steps}
          />
          <WhyChoose
            heading="Why Use an Online DeviantArt Video Downloader?"
            intro="An online downloader is better than desktop software for nearly every use case. Here's why:"
            reasons={reasons}
          />
          <SupportedDevices heading="Supported Devices & Browsers" devices={devices} />
          <DownloadTips heading="Tips for the Best Experience" tips={tips} />
          <RelatedTools currentPath="/online/" />
          <FaqSection items={faqs} />
        </div>
      </main>

      <SiteFooter />
      <PageStructuredData
        path="/online/"
        webAppName="DeviantArt Video Downloader Online"
        webAppDescription="Download DeviantArt videos online for free. No sign up, no watermark, works in any browser on any device."
        breadcrumbName="DeviantArt Video Downloader Online"
        howToName="How to Download DeviantArt Videos Online"
        howToDescription="Use this online DeviantArt video downloader in three simple steps. No sign up, no installation."
        howToSteps={[
          {
            name: 'Open the Video on DeviantArt',
            text: "Go to deviantart.com and open the video you want to save. Make sure the video is public. Copy the full URL from your browser's address bar. It should look like https://www.deviantart.com/username/art/video-title.",
          },
          {
            name: 'Paste the Link and Click Download',
            text: 'Come back to this page, paste the copied URL into the input box above, and click the Download button. The tool will process the link online and fetch the video file for you.',
          },
          {
            name: 'Save the MP4 to Your Device',
            text: 'When the download is ready, click the save button. The video will be saved as an MP4 file on your phone, tablet, or computer — no watermark, no compression, no registration.',
          },
        ]}
        faqs={faqs}
      />
    </div>
  )
}
