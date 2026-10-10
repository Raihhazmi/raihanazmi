import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/motion/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const { site, person, about } = siteContent

export function Profile() {
  return (
    <Section id="profile" tone="light">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Profile"
          kanji="人"
          title={about.title}
          lede={about.lede}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_17rem] lg:gap-20">
          <Reveal
            when="scroll"
            className="[&>p]:mb-6 [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:mr-4 [&>p:first-child]:first-letter:font-display [&>p:first-child]:first-letter:text-6xl [&>p:first-child]:first-letter:leading-[0.8] [&>p:last-child]:mb-0 lg:columns-2 lg:gap-14"
          >
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="break-inside-avoid text-body text-text-muted"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal when="scroll" delay={0.1}>
            <dl className="space-y-8 border-t border-line pt-8">
              <div>
                <dt className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
                  Positioning
                </dt>
                <dd className="mt-2 text-body text-text">
                  {person.positioning.full}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
                  Based in
                </dt>
                <dd className="mt-2 text-body text-text">
                  {person.location.city}, {person.location.region}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
                  Practice
                </dt>
                <dd className="mt-2 text-body text-text">{site.tagline}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
