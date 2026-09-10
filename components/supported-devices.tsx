type Device = { title: string; description: string }

const defaultDevices: Device[] = [
  {
    title: 'Desktop',
    description:
      'Windows, macOS, and Linux — works on Chrome, Firefox, Safari, Edge, Opera, and Brave. Keep your browser up to date for the best experience.',
  },
  {
    title: 'Mobile',
    description:
      'Android phones and tablets, iPhone, and iPad — the tool is fully responsive and adapts to touch screens.',
  },
  {
    title: 'No App Required',
    description:
      "No app to install from the App Store or Google Play. Visit the site and start downloading immediately.",
  },
]

export function SupportedDevices({
  heading = 'Supported Devices & Platforms',
  intro = 'The DeviantArt Video Downloader is designed to work seamlessly across all devices and operating systems. Whether you are on a desktop at home or a phone on the go, the experience stays smooth and consistent.',
  devices = defaultDevices,
}: {
  heading?: string
  intro?: string
  devices?: Device[]
}) {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold text-foreground">{heading}</h2>
      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{intro}</p>
      <ul className="flex flex-col gap-2">
        {devices.map((device) => (
          <li key={device.title} className="rounded-xl border border-border bg-card p-4">
            <h3 className="text-sm font-semibold text-foreground">{device.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{device.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
