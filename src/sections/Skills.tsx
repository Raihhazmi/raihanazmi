import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/motion/Reveal'

const { skills } = siteContent

/**
 * Editorial grouping only. No percentages, progress bars or ratings — those
 * are opinions dressed up as measurements.
 */
export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Reveal when="scroll">
          <SectionHeading
            eyebrow="Capabilities"
            title="Skills"
            lede="Grouped by the kind of decision they support, not by how confident the claim sounds."
          />
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal
              key={group.id}
              when="scroll"
              delay={(index % 3) * 0.06}
              className="border-t border-line pt-6"
            >
              <h3 className="font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-body text-text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
