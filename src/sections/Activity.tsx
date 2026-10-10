import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/motion/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const { experience, recognition } = siteContent

export function Activity() {
  return (
    <Section id="activity" tone="dark">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Activity"
          kanji="働"
          title="Experience, in sequence."
          lede="Professional work alongside long-run independent product development."
        />

        <ol className="mt-14 divide-y divide-line border-y border-line">
          {experience.map((entry, index) => (
            <li key={entry.id}>
              <Reveal when="scroll">
                <div className="grid gap-6 py-8 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-10">
                  <span className="font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="font-display text-h3 leading-tight">
                      {entry.role}
                    </h3>
                    {entry.organisation ? (
                      <p className="mt-2 font-mono text-meta uppercase tracking-[0.16em] text-text-muted">
                        {entry.organisation}
                        {entry.department ? ` · ${entry.department}` : ''}
                      </p>
                    ) : null}
                    {entry.location ? (
                      <p className="mt-1 text-meta text-text-muted">
                        {entry.location}
                      </p>
                    ) : null}
                  </div>

                  <div className="md:text-right">
                    {entry.period ? (
                      <p className="font-mono text-meta uppercase tracking-[0.16em] text-text-muted">
                        {entry.period.start} — {entry.period.end}
                      </p>
                    ) : null}
                    {entry.current ? (
                      <span className="mt-2 inline-flex items-center gap-2 font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-accent"
                        />
                        Current
                      </span>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <p className="font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
            Recognition
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {recognition.map((entry) => (
              <Reveal key={entry.id} when="scroll" delay={0.08}>
                <div className="flex h-full flex-col border border-line p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
                      {entry.date}
                    </span>
                    <span className="font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
                      {entry.organisation}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-h3 leading-tight">
                    {entry.title}
                  </h3>
                  <p className="mt-4 text-body text-text-muted">{entry.detail}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                    {entry.skills.map((skill) => (
                      <li
                        key={skill}
                        className="border border-line px-3 py-1 font-mono text-meta uppercase tracking-[0.14em] text-text-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
