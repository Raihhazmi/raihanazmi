import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/motion/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const { education } = siteContent

export function Education() {
  return (
    <Section id="education" tone="dark">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Education"
          kanji="学"
          title="Formal grounding."
          lede="Information Technology, with a focus on the architecture behind connected systems."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {education.map((entry) => (
            <Reveal key={entry.id} when="scroll" className="h-full">
              <div className="flex h-full flex-col border border-line p-8">
                <p className="font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
                  {entry.period.start} — {entry.period.end}
                </p>
                <h3 className="mt-6 font-display text-h3 leading-tight">
                  {entry.institution}
                </h3>
                <p className="mt-2 font-mono text-meta uppercase tracking-[0.16em] text-text-muted">
                  {entry.degree}
                </p>

                <p className="mt-8 font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
                  Focus
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.focus.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-3 py-1 font-mono text-meta uppercase tracking-[0.14em] text-text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
