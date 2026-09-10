import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/legal-page'

const pageUrl = 'https://artvideodl.com/privacy/'

export const metadata: Metadata = {
  title: 'Privacy Policy - ArtVideoDL',
  description:
    'How ArtVideoDL handles your data: no accounts, no stored videos, no personal information required to use the downloader.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Privacy Policy - ArtVideoDL',
    description:
      'How ArtVideoDL handles your data: no accounts, no stored videos, no personal information required.',
    siteName: 'ArtVideoDL',
  },
}

const sections: LegalSection[] = [
  {
    heading: 'Information We Do Not Collect',
    paragraphs: [
      'ArtVideoDL is built to work without knowing who you are. There is no sign-up, no login, and no profile, so the categories of data that most websites collect simply never reach us.',
    ],
    bullets: [
      'No names, email addresses, or phone numbers.',
      'No DeviantArt account credentials — we never ask for your username or password.',
      'No payment details, because the tool is free and has no paid tier.',
      'No download history tied to you, and no dashboard or log of what you have converted.',
    ],
  },
  {
    heading: 'The Video Links You Paste',
    paragraphs: [
      'When you paste a DeviantArt URL, our server uses it to locate the video and return the file to your browser. The link is used only to complete that single request.',
      'We do not save the URLs you submit to a database, associate them with you, or build a library of processed videos. Once your MP4 has been delivered, the request is finished and the temporary data used to serve it is discarded.',
    ],
  },
  {
    heading: 'Downloaded Files',
    paragraphs: [
      'Videos are not stored on our servers after your download completes, and we never keep a permanent copy of any file you fetch. The MP4 is saved directly to your own device, and only you have access to it.',
    ],
  },
  {
    heading: 'Cookies and Local Storage',
    paragraphs: [
      'We do not use advertising or tracking cookies, and we do not run cross-site profiling of visitors. The site does not require cookies to function, so you can block them entirely and the downloader will still work.',
    ],
  },
  {
    heading: 'Analytics',
    paragraphs: [
      'To understand how many people use the site and which pages are useful, we use privacy-friendly analytics: Vercel Analytics and Ahrefs Web Analytics. Both report traffic in aggregate.',
      'These tools do not use cookies to identify you and do not collect personal information. We can see broad patterns such as page views, referring sites, and general country-level location — never who you are or which specific videos you downloaded.',
    ],
  },
  {
    heading: 'Server Logs and Security',
    paragraphs: [
      'Like virtually all websites, our hosting provider records standard technical request data such as IP address, browser type, and timestamp. These logs exist to keep the service running, diagnose errors, and prevent abuse.',
      'All traffic is served over HTTPS, so the connection between your browser and our servers is encrypted. We do not inject malware, adware, or unwanted software into your downloads.',
    ],
  },
  {
    heading: 'Third-Party Services',
    paragraphs: [
      'To deliver a video, our server must contact DeviantArt to retrieve the file. DeviantArt is an independent company with its own privacy policy and terms, and we have no control over how it handles requests to its servers.',
      'The site is hosted on Vercel, which processes requests on our behalf as an infrastructure provider. This policy covers only ArtVideoDL — it does not apply to DeviantArt or any other site you visit.',
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      'ArtVideoDL is not directed at children under 13, and because we do not collect personal information from anyone, we do not knowingly collect it from children.',
    ],
  },
  {
    heading: 'Your Choices',
    paragraphs: [
      'Because we do not hold personal data or accounts, there is no profile to export or delete. If you would prefer not to be counted in aggregate analytics, a browser-level tracker blocker will prevent those scripts from loading, and the downloader will continue to work normally.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    paragraphs: [
      'If our practices change, we will update this page and revise the "Last updated" date above. Continuing to use the site after a change means you accept the revised policy.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      'If you have a question about this policy or how the tool handles data, you can reach us at privacy@artvideodl.com. For copyright matters, please use the DMCA page instead so your request reaches the right process.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="August 25, 2026"
      intro="ArtVideoDL is a free DeviantArt video downloader that works without accounts or personal information. This page explains exactly what happens to the data involved when you use it — and, more importantly, what we never collect in the first place."
      sections={sections}
    />
  )
}
