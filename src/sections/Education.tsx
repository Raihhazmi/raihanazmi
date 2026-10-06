import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/motion/Reveal'

const { education } = siteContent

export function Education() {
  return (
    <Section id="education">
      <Container>
        <Reveal when="scroll">
          <SectionHeading eyebrow="Education" title="Education" />
        </Reveal>

        <div className="mt-12">
          {education.map((entry, index) => (
            <Reveal
              key={entry.id}
              when="scroll"
              delay={index * 0.06}
              className="border-t border-line pt-8 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
                <h3 className="text-h3">{entry.degree}</h3>
                <p className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
                  {entry.period.start} – {entry.period.end}
                </p>
              </div>

              <p className="mt-3 text-body">{entry.institution}</p>

              <div className="mt-7">
                <p className="font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
                  Focus
                </p>
                <ul className="mt-3 space-y-1.5">
                  {entry.focus.map((item) => (
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
