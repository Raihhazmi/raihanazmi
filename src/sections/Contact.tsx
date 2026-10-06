import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/motion/Reveal'

const { person, socials } = siteContent

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Reveal when="scroll">
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            lede="For project enquiries, collaborations, or questions about the work above."
          />
        </Reveal>

        <Reveal when="scroll" delay={0.08} className="mt-12 flex flex-col gap-8">
          <a
            href={`mailto:${person.email}`}
            className="font-display text-h2 break-all tracking-tight transition-colors duration-300 hover:text-accent-strong"
          >
            {person.email}
          </a>

          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-meta text-text-muted uppercase tracking-[0.18em] transition-colors duration-300 hover:text-accent-strong"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}
