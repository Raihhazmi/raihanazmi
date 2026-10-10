import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/motion/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const { skills } = siteContent

export function Skills() {
  return (
    <Section id="skills" tone="light">
      <Container>
        <SectionHeading
          index="07"
          eyebrow="Capabilities"
          kanji="技"
          title="What I work with."
          lede="From system and product design through to the mobile stack that ships it."
        />

        <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.id} when="scroll" delay={(index % 3) * 0.06}>
              <div className="flex h-full flex-col bg-paper p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-h3 leading-tight">
                    {group.label}
                  </h3>
                  <span className="font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <ul className="mt-6 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-body text-text-muted">
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
