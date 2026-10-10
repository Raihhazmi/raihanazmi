import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/motion/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const { site, person, socials } = siteContent

export function Contact() {
  return (
    <Section id="contact" tone="dark">
      <Container>
        <SectionHeading
          index="08"
          eyebrow="Contact"
          kanji="信"
          title="Let's build something deliberate."
          lede="Open to building products where the architecture is decided first and the interface follows."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <Reveal when="scroll">
            <p className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
              Email
            </p>
            <a
              href={`mailto:${person.email}`}
              className="mt-5 block break-words font-display text-h2 leading-tight transition-colors duration-300 hover:text-accent"
            >
              {person.email}
            </a>
            <p className="mt-8 max-w-text text-body text-text-muted">
              {site.summary}
            </p>
          </Reveal>

          <Reveal when="scroll" delay={0.1}>
            <p className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
              Elsewhere
            </p>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-5 font-mono text-meta uppercase tracking-[0.18em] text-text transition-colors duration-300 hover:text-accent-strong"
                  >
                    {social.label}
                    <span
                      aria-hidden="true"
                      className="text-text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent-strong"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
              {person.location.city}, {person.location.region}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
