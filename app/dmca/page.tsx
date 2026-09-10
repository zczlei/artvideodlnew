import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/legal-page'

const pageUrl = 'https://artvideodl.com/dmca/'

export const metadata: Metadata = {
  title: 'DMCA & Copyright Policy - ArtVideoDL',
  description:
    'ArtVideoDL respects artists\u2019 rights. Read our copyright policy and learn how to submit a DMCA takedown notice.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'DMCA & Copyright Policy - ArtVideoDL',
    description: 'Our copyright policy and how to submit a DMCA takedown notice.',
    siteName: 'ArtVideoDL',
  },
}

const sections: LegalSection[] = [
  {
    heading: 'Our Position on Copyright',
    paragraphs: [
      'ArtVideoDL respects the rights of the artists who publish work on DeviantArt. The tool is intended for personal use — for example, saving a public video for offline viewing, or downloading work you created yourself.',
      'Using this tool to republish, sell, or claim credit for someone else\u2019s work is not permitted and is not something we condone.',
    ],
  },
  {
    heading: 'We Do Not Host Any Videos',
    paragraphs: [
      'This is the most important thing to understand about a takedown request sent to us. ArtVideoDL does not store, host, index, or archive any video files.',
      'When a visitor pastes a link, our server fetches the file from DeviantArt\u2019s own servers and passes it straight through to that visitor\u2019s browser. Nothing is retained afterward. Because no copy exists on our infrastructure, there is no hosted file for us to remove.',
      'This also means we have no library or search function — a video can only be accessed by someone who already has its public DeviantArt URL.',
    ],
  },
  {
    heading: 'Only Public Content Can Be Accessed',
    paragraphs: [
      'The tool can only reach content that DeviantArt already serves publicly. Private posts, friends-only work, and anything behind a sign-in wall cannot be fetched. We do not bypass access restrictions, paywalls, or content protections.',
    ],
  },
  {
    heading: 'Submitting a DMCA Notice',
    paragraphs: [
      'If you believe your copyrighted work is being misused in connection with this site, send a written notice to dmca@artvideodl.com. To be actionable under the DMCA, your notice must include the following:',
    ],
    bullets: [
      'Your contact information — full name, address, telephone number, and email address.',
      'Identification of the copyrighted work you claim has been infringed.',
      'The specific URL on this site that relates to your claim.',
      'A statement that you have a good-faith belief the use is not authorized by the copyright owner, its agent, or the law.',
      'A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the owner\u2019s behalf.',
      'Your physical or electronic signature.',
    ],
  },
  {
    heading: 'What Happens Next',
    paragraphs: [
      'We review every complete notice we receive and respond promptly. Where a valid claim relates to something within our control — such as a page, description, or reference on this site — we will remove or disable it.',
      'Incomplete notices slow this process down, so please include all of the items listed above.',
    ],
  },
  {
    heading: 'Requests About the Video Itself',
    paragraphs: [
      'If your goal is to have a video taken off the internet, the request needs to go to DeviantArt, because that is where the file is actually hosted. Removing the source post stops it from being accessible through this tool or any other.',
      'We are glad to assist where we can, but we cannot delete a file that resides on DeviantArt\u2019s servers.',
    ],
  },
  {
    heading: 'Counter-Notification',
    paragraphs: [
      'If material was removed as the result of a notice you believe was mistaken, you may submit a counter-notification to the same address, including your contact information, identification of the removed material, and a statement under penalty of perjury that the removal was the result of a mistake or misidentification.',
    ],
  },
  {
    heading: 'Repeat Infringers',
    paragraphs: [
      'We reserve the right to block access to our service for users who repeatedly misuse it to infringe copyright.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      'Copyright and DMCA matters: dmca@artvideodl.com. For questions about data handling instead, see our Privacy Policy.',
    ],
  },
]

export default function DmcaPage() {
  return (
    <LegalPage
      title="DMCA & Copyright Policy"
      lastUpdated="August 25, 2026"
      intro="We take copyright seriously and want the process for reporting a problem to be straightforward. This page explains how ArtVideoDL works in relation to copyrighted material and how to submit a takedown notice."
      sections={sections}
    />
  )
}
