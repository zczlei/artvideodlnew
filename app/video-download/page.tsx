import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DownloadTool } from '@/components/download-tool'

const pageUrl = 'https://artvideodl.com/video-download/'

export const metadata: Metadata = {
  title: 'DeviantArt Video Download - Fast & Free | ArtVideoDL',
  description:
    "What a DeviantArt video download actually gives you: MP4 container, H.264 codec, the artist's original resolution — plus playback on every device and how to fix a file that won't play.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'DeviantArt Video Download - Fast & Free | ArtVideoDL',
    description:
      "What a DeviantArt video download actually gives you: MP4 container, H.264 codec, the artist's original resolution — plus playback on every device and how to fix a file that won't play.",
    siteName: 'ArtVideoDL',
  },
}

// 目标词：deviantart video download
// 这页只回答一件事：下载回来的那个文件是什么、能不能用、坏了怎么办。首页答不了。

const pipeline = [
  {
    n: 1,
    h: 'The Page Is Read, Not the Feed',
    p: 'Your link points at a DeviantArt post page. The tool opens that page and reads its data, which is why the link must end in the numeric post ID — a URL copied from a browsing feed carries no post data to read.',
  },
  {
    n: 2,
    h: 'The Video Source Is Located',
    p: 'A video post on DeviantArt is not one file. The original upload is transcoded into streaming versions, and the post page references several of them. The tool looks for the highest-quality MP4 source referenced by that page.',
  },
  {
    n: 3,
    h: 'Wrapped as a Standard MP4',
    p: "The file is returned as it sits on DeviantArt's CDN — nothing is re-encoded. You get a regular .mp4 with H.264 video and AAC audio, the same combination every phone, laptop and TV player understands.",
  },
  {
    n: 4,
    h: 'You Get a Direct File Link',
    p: 'That address opens in your browser as a download rather than a stream, so the bytes land on your device instead of playing inside a player you cannot export from.',
  },
]

const anatomy = [
  ['Container', 'MP4 (.mp4)'],
  ['Video codec', 'H.264 (AVC)'],
  ['Audio codec', 'AAC stereo'],
  ['Resolution', 'Whatever the post carries — up to 1080p'],
  ['Frame rate', 'Preserved from the source, not converted'],
  ['Watermark', 'None added by the download'],
]

const codecCards = [
  {
    h: 'MP4 Is the Box, H.264 Is the Content',
    p: 'An MP4 file is a container — a wrapper holding a video track, an audio track and their timing data. Inside that wrapper the pictures are compressed by a codec, most commonly H.264. Two files can both end in .mp4 and still refuse to open on the same device, because the codec inside differs. When a file will not play, the codec is usually the culprit, not the extension.',
  },
  {
    h: 'Why H.264 Instead of the Newest Codec',
    p: 'AV1 and H.265 compress harder, but older phones, budget smart TVs and most car screens cannot decode them. H.264 decodes on essentially everything made since 2010, including hardware in devices a decade old — which is the right trade for a file whose purpose is simply to play back.',
  },
  {
    h: 'How to Confirm What a File Really Is',
    p: 'On Windows, open the file in VLC and press Ctrl + I (Media Information, Codec tab). On Mac, open it in QuickTime and press Cmd + I. Android: long-press the file in the Files app and check Details. This tells you the exact codec and resolution, which is the fastest way to prove a playback problem is device-side rather than a bad download.',
  },
]

const qualityNotes = [
  {
    h: 'The Artist Sets the Ceiling',
    p: 'A download cannot deliver more pixels than the post contains. DeviantArt stores the best version it accepted from the upload, and that is the upper limit. Anything asking for a higher resolution than the post carries is inventing pixels, not recovering them.',
  },
  {
    h: 'Bitrate Matters More Than Resolution',
    p: 'Two clips both labelled 1080p can look worlds apart. Resolution is the frame size; bitrate is how many bits per second describe that frame. Fan-made motion pieces and animations are often uploaded at generous bitrate and stay crisp; a heavily compressed upload at the same resolution turns blocky in dark scenes and in fast pans.',
  },
  {
    h: 'What a Typical File Weighs',
    p: 'A one-minute 1080p clip usually lands between 8 and 25 MB; a 720p render of the same length is often 4 to 12 MB; a 30-second animation can be lighter still. Short art pieces frequently come in under 20 MB, so saving a batch does not eat your storage.',
  },
]

const playback = [
  {
    h: 'Windows',
    p: 'Files opened with the Movies and TV app or VLC play immediately. If double-clicking opens a browser tab instead of a player, the file was saved with a stray extension — rename it to end in .mp4.',
  },
  {
    h: 'macOS',
    p: 'QuickTime plays H.264 MP4 natively. If a file will not open, it is almost certainly a codec QuickTime does not carry rather than a corrupt download — press Cmd + I inside QuickTime first and check what the codec line says.',
  },
  {
    h: 'iPhone and iPad',
    p: 'Safari writes the MP4 into the Files app, not into Photos. To get it into the camera roll, open the file in Files, tap the share icon and choose Save Video — the Photos library only accepts files that arrive through that step.',
  },
  {
    h: 'Android',
    p: 'The file sits in internal storage under Downloads. Any gallery app plays it from there; no extra player is needed for standard H.264 MP4.',
  },
  {
    h: 'Smart TV and Casting',
    p: "Casting the browser tab re-streams at whatever the network allows. Copy the file to a USB stick and play it from the TV's own media input instead — or use the TV's built-in DLNA app pointed at a computer on the same network. Many TV browsers cannot save a file at all, so a download on the TV is a dead end.",
  },
]

const editors = [
  {
    h: 'CapCut (Phone and Desktop)',
    p: "Import from your device's Files or Downloads folder. CapCut handles H.264 MP4 without a transcode step. If the clip looks choppy once on the timeline, check the project frame rate against the clip — a 24 fps project will stutter a 60 fps source, and the fix is a project setting, not a re-download.",
  },
  {
    h: 'Adobe Premiere Pro',
    p: 'Premiere reads the file directly, but clips taken from streaming sources are often variable frame rate. VFR is what causes audio drifting out of sync halfway down a timeline. If that happens, run the file through HandBrake once with a fixed frame rate, then import the converted copy.',
  },
  {
    h: 'DaVinci Resolve (Free)',
    p: 'Standard 8-bit H.264 MP4 imports fine. The free build will not decode 10-bit H.264 on some systems — the clip appears as a black or grey frame on the timeline. If that is what you see, the source was uploaded 10-bit, and transcoding it to 8-bit before import solves it.',
  },
]

const fixes = [
  {
    h: 'Why a Saved Clip Looks Softer Than on the Page',
    p: 'Streaming versions are tuned for fast loading. Dark backgrounds, film grain and fine line art all collapse first, because that is where compression spends the fewest bits. The downloaded file is the same asset the page plays; the difference you see is the compression, not a lesser copy.',
  },
  {
    h: 'Why a Reposted Copy Degrades Again',
    p: 'Each platform re-encodes whatever it is handed. A clip saved from here, then uploaded to Instagram and re-saved, has passed through two compression stages — generation loss is why the second copy looks muddy. Download once, use that file directly.',
  },
  {
    h: 'Animation Versus Live Footage',
    p: 'Flat colour regions and hard edges compress well, so animated art often survives at smaller sizes than footage. Live-action scenes with movement and depth need more bitrate for the same clarity — which is why an animation clip can look better than a bigger video clip of the same resolution.',
  },
]

const tips = [
  'Before opening a file that refuses to play, check its codec — a wrapper or codec mismatch is fixable, a corrupt download is not, and the two need different answers.',
  'Rename files as you save them. Ten files named with a numeric ID turn into a junk drawer within a week.',
  'If the resolution on the saved file matters for a project, check the post itself first — a 720p post cannot produce a 1080p download.',
  'Keep one clean copy before editing. A file that has already gone through one encode still holds original detail; a re-export of a re-export does not.',
  'For a clip you plan to share, credit the artist and link the post. The work is theirs; the download only moved it onto your device.',
]

const faqs = [
  {
    q: 'Is a DeviantArt video download the original file the artist uploaded?',
    a: 'It is the best version DeviantArt serves for that post, which is not always the untouched upload. DeviantArt transcodes uploads into streaming formats, and the download hands you that served file. For most posts it is indistinguishable from the original on screen.',
  },
  {
    q: 'Does the tool re-encode my video?',
    a: 'No. The file comes down at the resolution and bitrate the post already carries. Nothing is upscaled, sharpened or padded to reach a rounder number — pixels that were never in the source cannot be added by any honest downloader.',
  },
  {
    q: 'The page says 1080p but my file is 720p. Why?',
    a: "A post's displayed tag and the file it actually serves can differ when the original upload was smaller than the tier, or when DeviantArt serves a lower rendition to keep playback smooth. The saved file is what exists; a downloader cannot conjure a rendition that was never made.",
  },
  {
    q: 'Why does audio drift out of sync in my editor?',
    a: 'Streaming clips are frequently variable frame rate, and editors that expect constant frame rate lose alignment over a long timeline. Convert once with HandBrake to a fixed frame rate, then re-import. The download itself is fine.',
  },
  {
    q: 'Can I get the file as a GIF or audio-only MP3?',
    a: 'The file this page delivers is MP4 video with AAC audio. For a GIF, load the MP4 into a converter such as Gifski or an online MP4-to-GIF tool — starting from the video gives a better result than any site-generated GIF, because you choose the size and frame rate.',
  },
  {
    q: 'Does the downloaded video carry a watermark?',
    a: 'No. Nothing is stamped onto your file. Whatever mark you see was already part of the post — some artists watermark their own work, and that mark travels with the video.',
  },
  {
    q: 'Will a 60 fps clip stay 60 fps after download?',
    a: 'Yes, the frame rate travels with the file. Smoothness you lose appears later, when an editor or platform projects 24 or 30 fps onto it — that is a setting downstream, not a change made during the download.',
  },
  {
    q: 'Can I use a downloaded video in my own upload?',
    a: 'The file is on your device, but the work still belongs to whoever made it. Ask permission or credit the artist and link the post, and take down anything an artist objects to. For a commercial project, permission is not optional. Details are on our DMCA page.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://artvideodl.com/video-download/#app',
      name: 'DeviantArt Video Download',
      url: 'https://artvideodl.com/video-download/',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any (browser-based)',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'MP4 file with H.264 video and AAC audio',
        'Original resolution, up to 1080p',
        'No re-encoding and no added watermark',
        'Plays on Windows, macOS, Android, iPhone and iPad',
      ],
    },
    {
      '@type': 'HowTo',
      '@id': 'https://artvideodl.com/video-download/#howto',
      name: 'How a DeviantArt Video Becomes an MP4 File',
      totalTime: 'PT1M',
      step: pipeline.map((s) => ({ '@type': 'HowToStep', name: s.h, text: s.p })),
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://artvideodl.com/video-download/#faq',
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
const lead = 'mb-4 text-sm leading-relaxed text-muted-foreground'
const p = 'mt-1 text-sm leading-relaxed text-muted-foreground'
const card = 'rounded-xl border border-border bg-card p-4'

export default function VideoDownloadPage() {
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
            DeviantArt Video Download
          </h1>
          <p className="mt-3 text-balance text-base text-muted-foreground">
            Save a DeviantArt video as a clean MP4 file — and know exactly what you hold afterwards:
            codec, resolution, size, and how to play it on any device you own.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {['MP4 + H.264', 'Original Resolution', 'No Watermark', 'Any Player'].map((t) => (
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
          <h2 className={h2}>From Link to File: What Happens in Those Few Seconds</h2>
          <p className={lead}>
            Most people never look past the save button, yet the answer to almost every playback
            question lives here — in what the file was made of on the way to your device.
          </p>
          <div className="space-y-3">
            {pipeline.map((s) => (
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
          <h2 className={h2}>Anatomy of the File You Download</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <tbody>
                {anatomy.map(([k, v]) => (
                  <tr key={k} className="border-b border-border last:border-0">
                    <th className="w-2/5 px-4 py-3 text-left align-top font-semibold text-foreground">
                      {k}
                    </th>
                    <td className="px-4 py-3 align-top text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>MP4 Is the Container, H.264 Is the Codec</h2>
          <div className="space-y-3">
            {codecCards.map((c) => (
              <div key={c.h} className={card}>
                <h3 className={h3}>{c.h}</h3>
                <p className={p}>{c.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>Resolution and File Size: What Actually Sets Them</h2>
          <div className="space-y-3">
            {qualityNotes.map((c) => (
              <div key={c.h} className={card}>
                <h3 className={h3}>{c.h}</h3>
                <p className={p}>{c.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>Playing It Back on Every Screen You Own</h2>
          <div className="space-y-3">
            {playback.map((c) => (
              <div key={c.h} className={card}>
                <h3 className={h3}>{c.h}</h3>
                <p className={p}>{c.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>Using the File in CapCut, Premiere Pro or DaVinci Resolve</h2>
          <div className="space-y-3">
            {editors.map((c) => (
              <div key={c.h} className={card}>
                <h3 className={h3}>{c.h}</h3>
                <p className={p}>{c.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>Why the File Sometimes Looks Softer Than You Expected</h2>
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
          <h2 className={h2}>Habits Worth Keeping on the Saved File</h2>
          <div className="rounded-xl border border-border bg-card p-4">
            <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
              {tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4">
          <h2 className={h2}>Questions About the Downloaded File</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground">
                  {f.q}
                  <span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-14 pt-10">
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/online/" className={card}>
              <h3 className={h3}>Need the browser-side steps instead?</h3>
              <p className={p}>
                The online downloader page covers where your file lands in Chrome, Safari, Firefox,
                iPhone and Android, and what to do when a download starts but nothing saves.
              </p>
            </Link>
            <Link href="/" className={card}>
              <h3 className={h3}>Start from the main tool</h3>
              <p className={p}>
                ArtVideoDL handles public DeviantArt video posts — paste a link and save the MP4
                without an account or an extension.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
