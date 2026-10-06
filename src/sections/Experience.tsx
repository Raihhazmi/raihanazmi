import { siteContent } from '../lib/content'
import type { Period } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/motion/Reveal'

const { experience, recognition } = siteContent

function periodLabel(period?: Period): string | null {
  if (!period) return null
  return `${period.start} – ${period.end}`
}

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Reveal when="scroll">
          <SectionHeading eyebrow="Experience" title="Professional experience" />
        </Reveal>

        <div className="mt-12">
          {experience.map((entry, index) => {
            const meta = [
              entry.location,
              entry.department,
              periodLabel(entry.period),
            ].filter((value): value is string => Boolean(value))

            return (
              <Reveal
                key={entry.id}
                when="scroll"
                delay={index * 0.06}
                className="border-t border-line py-8 first:border-t-0 first:pt-0 first:pb-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
                  <h3 className="text-h3">{entry.role}</h3>
                  {entry.current ? (
                    <span className="bg-accent px-2.5 py-1 font-mono text-meta uppercase tracking-[0.18em] text-accent-ink">
                      Current
                    </span>
                  ) : null}
                </div>

                {entry.organisation ? (
                  <p className="mt-3 text-body">{entry.organisation}</p>
                ) : null}

                {meta.length > 0 ? (
                  <p className="mt-3 font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
                    {meta.join(' · ')}
                  </p>
                ) : null}
              </Reveal>
            )
          })}
        </div>

        {recognition.length > 0 ? (
          <Reveal when="scroll" className="mt-14 border-t border-line pt-8">
            <p className="font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
              Recognition
            </p>

            {recognition.map((item) => (
              <article key={item.id} className="mt-6">
                <h3 className="text-h3">{item.title}</h3>
                <p className="mt-3 font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
                  {item.organisation} · {item.date}
                </p>
                <p className="mt-4 max-w-text text-body text-text-muted">{item.detail}</p>
                <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
        ) : null}
      </Container>
    </Section>
  )
}
