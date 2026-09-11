import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const siteUrl = 'https://artvideodl.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DeviantArt Video Downloader - Free Online Tool',
    template: '%s | ArtVideoDL',
  },
  description:
    'Download DeviantArt videos online for free. No sign up, no watermark. Save MP4 videos from DeviantArt to your device in seconds. Fast, free, works on all browsers.',
  generator: 'v0.app',
  applicationName: 'ArtVideoDL',
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0c0d10',
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <head>
        {process.env.NODE_ENV === 'production' && (
          <script src="https://analytics.ahrefs.com/analytics.js" data-key="qRMZpTUNa6FACTjMqMH8jw" async />
        )}
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
