import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/motion/Reveal'
import { SplitHeading } from '../components/motion/SplitHeading'

const { site, person, hero } = siteContent

export function Hero() {
  return (
    <Section tone="light" bordered={false} className="overflow-hidden">
      <Container>
        <Reveal className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-line pb-6">
          <p className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
            {site.domain}
          </p>
          <p className="font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
            {site.tagline}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <div>
            <p className="font-mono text-meta uppercase tracking-[0.2em] text-text-muted">
              <span className="text-accent-strong">(01)</span> — {hero.greeting}
            </p>
            <SplitHeading as="h1" delay={0.1} className="mt-6 text-mega">
              Halo, aku <span className="italic text-accent">Raihan</span>.
            </SplitHeading>
          </div>

          <span
            aria-hidden="true"
            className="hidden select-none font-display text-display leading-none text-text-muted lg:block"
          >
            {hero.kanji}
          </span>
        </div>

        <div className="mt-14 grid gap-8 border-t border-line pt-8 md:grid-cols-[1.5fr_1fr] md:gap-12">
          <Reveal when="load" delay={0.35}>
            <p className="max-w-text text-body text-text-muted">{hero.intro}</p>
          </Reveal>
          <Reveal when="load" delay={0.45} className="md:text-right">
            <p className="font-mono text-meta uppercase tracking-[0.18em] text-text">
              {person.positioning.full}
            </p>
          </Reveal>
        </div>

        <Reveal when="load" delay={0.55} className="mt-12">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="border border-accent bg-accent px-7 py-4 font-mono text-meta uppercase tracking-[0.18em] text-accent-ink transition-colors duration-300 hover:bg-transparent hover:text-accent"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="border border-line px-7 py-4 font-mono text-meta uppercase tracking-[0.18em] transition-colors duration-300 hover:border-accent-strong hover:text-accent-strong"
            >
              Contact
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
