import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

type LegalPageProps = {
  title: string
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalPage({ title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-12">
          <header className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h1>
            <p className="text-sm text-muted-foreground/70">Last updated: {lastUpdated}</p>
            <p className="leading-relaxed text-muted-foreground text-pretty">{intro}</p>
          </header>

          <div className="flex flex-col gap-8">
            {sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold tracking-tight text-balance">{section.heading}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-muted-foreground text-pretty">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="flex flex-col gap-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-lg border border-border px-4 py-3 leading-relaxed text-muted-foreground text-pretty"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
