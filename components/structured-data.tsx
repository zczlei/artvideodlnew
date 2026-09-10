import { faqs as homeFaqs, type Faq } from '@/components/faq-section'
import { siteConfig } from '@/lib/site-config'

type HowToStep = { name: string; text: string }

type PageStructuredDataProps = {
  path: string
  webAppName: string
  webAppDescription: string
  breadcrumbName: string
  howToName: string
  howToDescription: string
  howToSteps: HowToStep[]
  faqs: Faq[]
}

export function PageStructuredData({
  path,
  webAppName,
  webAppDescription,
  breadcrumbName,
  howToName,
  howToDescription,
  howToSteps,
  faqs,
}: PageStructuredDataProps) {
  const url = `${siteConfig.url}${path}`

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: webAppName,
    url,
    description: webAppDescription,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ArtVideoDL',
        item: `${siteConfig.url}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbName,
        item: url,
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToName,
    description: howToDescription,
    step: howToSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const schemas = [webAppSchema, breadcrumbSchema, howToSchema, faqSchema]

  return (
    <>
      {schemas.map((schema, i) => (
        // eslint-disable-next-line react/no-danger
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export function HomeStructuredData() {
  return (
    <PageStructuredData
      path="/"
      webAppName="DeviantArt Video Downloader"
      webAppDescription="Download DeviantArt videos online for free. No sign up, no watermark. Save MP4 videos from DeviantArt to your device in seconds."
      breadcrumbName="DeviantArt Video Downloader"
      howToName="How to Download DeviantArt Videos"
      howToDescription="Step-by-step guide to download videos from DeviantArt for free."
      howToSteps={[
        {
          name: 'Copy the DeviantArt Video URL',
          text: 'Open DeviantArt, find the video you want, and copy its link from the address bar.',
        },
        {
          name: 'Paste the Link',
          text: `Paste the URL into the input box on ${siteConfig.url.replace('https://', '')} and click the Download button.`,
        },
        {
          name: 'Save Your MP4 Video',
          text: 'Choose your preferred quality and save the MP4 file to your device.',
        },
      ]}
      faqs={homeFaqs}
    />
  )
}
