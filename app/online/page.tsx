import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DownloadTool } from '@/components/download-tool'

const pageUrl = 'https://artvideodl.com/online/'

export const metadata: Metadata = {
  title: 'DeviantArt Video Downloader Online - No Sign Up | ArtVideoDL',
  description:
    'Use the DeviantArt video downloader online — no install, no extension. Where the file lands in Chrome, Safari, Firefox, iPhone and Android, plus fixes when a download stalls.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'DeviantArt Video Downloader Online - No Sign Up | ArtVideoDL',
    description:
      'Use the DeviantArt video downloader online — no install, no extension. Where the file lands in Chrome, Safari, Firefox, iPhone and Android, plus fixes when a download stalls.',
    siteName: 'ArtVideoDL',
  },
}

// 目标词：deviantart video downloader online
// 这页只回答一件事：浏览器里到底怎么操作、文件去哪了、下不下来怎么办。
// 首页答不了这些，所以这页有独立存在理由。

const steps = [
  {
    n: 1,
    h: 'Open the Video Page on DeviantArt',
    p: 'Go to deviantart.com and open the video you want to save. Make sure it is a public video post shown on its own page, not a thumbnail inside a browsing feed. Copy the full address from the bar at the top. DeviantArt video links end in a numeric ID, so the URL looks like https://www.deviantart.com/username/art/video-title-123456789.',
  },
  {
    n: 2,
    h: 'Paste the Link Right Here',
    p: 'Come back to this page, drop the URL into the box above and hit Download. The tool reads the post, locates the video file inside it and returns a direct address — no account, no install, no queue.',
  },
  {
    n: 3,
    h: 'Save the MP4 to Your Device',
    p: 'When the save button appears, click it. The file comes down as an MP4 at the highest quality the original post carries, with no watermark added. Where your browser puts it afterwards is covered further down.',
  },
]

const whyCards = [
  {
    h: 'Nothing to Install',
    p: 'No setup files, no dependencies, no system requirements. Open the page, paste a link.',
  },
  {
    h: 'Works on Every Device',
    p: 'Android, iPhone, iPad, Windows, Mac, Linux, Chromebook. If it has a browser, it works.',
  },
  {
    h: 'No Account or Sign-Up',
    p: 'No profile to create, no email to confirm, no password to remember — and nothing kept once the tab closes.',
  },
  {
    h: 'Never Goes Out of Date',
    p: 'Desktop apps break when the operating system updates. This page always runs the current version, because you are using it live.',
  },
]

const landing = [
  {
    h: 'Chrome on Windows, Mac and Chromebook',
    p: 'Files go to your Downloads folder unless you changed it. Press Ctrl + J (Mac: Cmd + Shift + J) to open the downloads list and confirm the save finished. To pick a location every time, go to Settings → Downloads and turn on Ask where to save each file before downloading.',
  },
  {
    h: 'Safari on Mac',
    p: 'Safari writes to whatever folder is set under Settings (Cmd + ,) → General → File download location. The down-arrow icon in the toolbar shows active and recent downloads. If nothing appears there, check whether a content-blocking extension is hiding the save before assuming the download failed.',
  },
  {
    h: 'Firefox',
    p: 'Firefox keeps its own download library — open it with Ctrl + Shift + J. Under Settings → General → Downloads you can switch on Always ask you where to save files, which is the safer habit on a computer other people use.',
  },
  {
    h: 'iPhone and iPad (Safari on iOS)',
    p: 'On iOS the MP4 lands in the Files app, not in Photos — the default path is set under Settings → Safari → Downloads. To move it into your camera roll, open the file in Files, tap the share icon and choose Save Video. Skipping that step is the single most common reason people report that an iPhone download did not work.',
  },
  {
    h: 'Android (Chrome)',
    p: 'Chrome writes to internal storage under Downloads. Open the Files app (or Files by Google → Downloads) to play it straight away, and long-press the file there to send it into another app.',
  },
]

const fixes = [
  {
    h: 'A popup blocker cut the save',
    p: 'A direct file link can look like a popup to an aggressive blocker. Allow popups for this site once, then run the link again — there is no need to lower your protection everywhere else.',
  },
  {
    h: 'A privacy extension swallowed the file',
    p: 'Content blockers occasionally treat a media URL as a tracking request. Pause the extension on this page and retry. If it works, that was the cause and nothing else needs changing.',
  },
  {
    h: 'Nothing happens when you tap on mobile',
    p: 'Some mobile browsers will not start a background download from a plain tap. Long-press the save button instead and choose Download linked file on Android, or Save to Files on iOS.',
  },
  {
    h: 'The network refuses file transfers',
    p: 'School, office and public Wi-Fi often block media file types outright. The page resolves the link, but the network stops the transfer. Switch to mobile data to confirm that is what happened.',
  },
  {
    h: 'The file is there but zero bytes',
    p: 'The connection dropped mid-transfer. Delete the partial file and run the same link again — retrying costs nothing and is not rate-limited.',
  },
  {
    h: 'The browser flagged the download as unsafe',
    p: 'Chrome and Edge both question files from domains they do not recognise. If the download shelf offers Keep, choosing it resumes the save: the MP4 is the same file the artist posted.',
  },
]

const compare = [
  {
    way: 'Online page',
    needs: 'Nothing — a tab',
    dies: 'Never: it runs live',
    access: 'Only the link you paste',
  },
  {
    way: 'Desktop software',
    needs: 'Installer, admin rights, updates',
    dies: 'Breaks on OS updates',
    access: 'Reads your file system',
  },
  {
    way: 'Browser extension',
    needs: 'Approval on install',
    dies: 'Silently disabled by the store',
    access: 'Sees every page you open',
  },
]

const tips = [
  'Keep the tab open until the save appears — closing early is the most common way a job gets abandoned.',
  "Paste the video's own page URL. A link taken from a gallery or a share button may point at the post wrapper instead of the file.",
  'If your browser warns that this site is trying to download multiple files, choose Allow — saving several clips in one sitting is normal use.',
  "Check the browser's downloads list before searching the desktop; on most systems the file is already there before you notice it.",
  'A current browser matters more than a fast computer. Older builds drop downloads silently rather than showing an error.',
]

const faqs = [
  {
    q: 'Can I use the DeviantArt video downloader online without installing anything?',
    a: 'Yes. This page is the entire tool — nothing to download, unzip or run first. Open it, paste a video link, and the work happens on our servers while you wait.',
  },
  {
    q: 'Do I need a browser extension to download DeviantArt videos online?',
    a: 'No. An extension sits inside your browsing session and can see every page you open, which is far more access than saving one clip requires. A tab that opens, runs the job and closes is the lighter option.',
  },
  {
    q: 'Is it safe to use an online downloader?',
    a: 'The only thing this page touches is the video link you paste. There is no DeviantArt password prompt, no email, no personal detail — and nothing you enter is ever linked back to your DeviantArt account.',
  },
  {
    q: 'Can I use it on a school Chromebook or a work computer?',
    a: 'Yes — there is no install and no admin rights involved. The one thing that can still stop you is the network itself, since filtered networks sometimes refuse file downloads outright.',
  },
  {
    q: 'Does the online downloader still work in incognito mode?',
    a: 'It does. Private windows only stop your browser from storing history and cookies; they do not block downloads. If a private window is the reason nothing saved, the likelier cause is that it blocks popups by default.',
  },
  {
    q: 'Will this work if DeviantArt is blocked on my network or in my country?',
    a: "If deviantart.com itself is unreachable from your connection, this page cannot fetch the video either, because the file still lives on DeviantArt's servers. A different network is the usual workaround.",
  },
  {
    q: 'Does using this page leave anything behind on my device?',
    a: 'Only the file you choose to save. Your browser remembers the visit in its history unless you were in a private window, but nothing is installed and no background process keeps running.',
  },
  {
    q: 'Can I use this online downloader on a smart TV browser?',
    a: 'The page loads, but most TV browsers have no usable place to write a file, so the save goes nowhere. Download on a phone or computer first, then cast the file to the TV.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://artvideodl.com/online/#app',
      name: 'DeviantArt Video Downloader Online',
      url: 'https://artvideodl.com/online/',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any (browser-based)',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'HowTo',
      '@id': 'https://artvideodl.com/online/#howto',
      name: 'How to Download a DeviantArt Video Online',
      totalTime: 'PT1M',
      step: steps.map((s) => ({ '@type': 'HowToStep', name: s.h, text: s.p })),
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://artvideodl.com/online/#faq',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

const h2 = 'mb-3 mt-10 text-xl font-bold text-foreground'
const h3 = 'text-sm font-semibold text-foreground'
const p = 'mt-1 text-sm leading-relaxed text-muted-foreground'
const card = 'rounded-xl border border-border bg-card p-4'

export default function OnlinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="mx-auto max-w-2xl px-4 pt-12 pb-6 text-center sm:pt-16">
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            DeviantArt Video Downloader Online
          </h1>
          <p className="mt-3 text-balance text-base text-muted-foreground">
            Download DeviantArt videos online in MP4. No installation, no registration — works in any
            browser, on any device, and the file is yours in about a minute.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {['100% Online', 'No Sign Up', 'No Install', 'Any Device'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <div className="px-4 pb-6">
          <DownloadTool />
        </div>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>How to Download a DeviantArt Video Online</h2>
          <div className="space-y-3">
            {steps.map((s) => (
              <div key={s.n} className={card}>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {s.n}
                  </span>
                  <h3 className={h3}>{s.h}</h3>
                </div>
                <p className={p}>{s.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>Where Your File Lands, Browser by Browser</h2>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            Every browser chooses a different destination, and on iPhone it is not where most people
            look first. These are the exact paths, so you are not hunting through your device after a
            save that already worked.
          </p>
          <div className="space-y-3">
            {landing.map((c) => (
              <div key={c.h} className={card}>
                <h3 className={h3}>{c.h}</h3>
                <p className={p}>{c.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>When the Download Starts but Nothing Saves</h2>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            Most failures here are not the video being unavailable — they are your browser or your
            network quietly refusing a file transfer. Each of these has a one-step fix.
          </p>
          <div className="space-y-3">
            {fixes.map((c) => (
              <div key={c.h} className={card}>
                <h3 className={h3}>{c.h}</h3>
                <p className={p}>{c.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>Online Page vs Desktop Software vs an Extension</h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-semibold">Method</th>
                  <th className="px-3 py-2 font-semibold">Needs</th>
                  <th className="px-3 py-2 font-semibold">What kills it</th>
                  <th className="px-3 py-2 font-semibold">What it can see</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((r) => (
                  <tr key={r.way} className="border-b border-border last:border-0">
                    <td className="px-3 py-2 font-medium text-foreground">{r.way}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.needs}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.dies}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            Desktop apps need installing, get left behind when the operating system updates, and often
            bundle extras you did not ask for. Extensions sit inside your session and see every page you
            open — a lot of permission for something you use three times a month. Running the job in a
            tab means nothing is installed and nothing keeps running after you close the page.
          </p>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>Why Use an Online Downloader</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyCards.map((c) => (
              <div key={c.h} className={card}>
                <h3 className={h3}>{c.h}</h3>
                <p className={p}>{c.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>Small Things That Save You a Retry</h2>
          <ul className="space-y-2">
            {tips.map((t) => (
              <li key={t} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-16">
          <h2 className={h2}>Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:hidden">
                  {f.q}
                </summary>
                <p className={p}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
