import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/motion/Reveal'

const { domain, tagline, summary } = siteContent.site
const { positioning } = siteContent.person

/**
 * Primary visual statement. Every string is read from src/lib/content.ts so
 * positioning, domain and copy stay single-sourced — no invented clients,
 * awards, numbers or job history.
 *
 * Entrance order is metadata -> headline -> supporting -> CTA, driven entirely
 * by `Reveal` delays. No bespoke timeline.
 */
export function Hero() {
  return (
    <Section>
      <Container>
        <Reveal
          className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-line pb-6"
        >
          <p className="font-mono text-meta text-text-muted uppercase tracking-[0.18em]">
            {domain}
          </p>
          <p className="font-mono text-meta text-accent-strong uppercase tracking-[0.18em]">
            {tagline}
          </p>
        </Reveal>

        <Reveal as="h1" delay={0.06} y={28} className="mt-10 text-display font-display">
          {positioning.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="mt-6 block text-h2 text-text-muted">
            <span className="text-accent-strong">{positioning.accent}</span> {positioning.suffix}
          </span>
        </Reveal>

        <Reveal as="p" delay={0.16} className="mt-10 max-w-text text-body text-text-muted">
          {summary}
        </Reveal>

        <Reveal delay={0.24} className="mt-12">
          {/* Written out rather than mapped from a variant table: Tailwind only
              generates utilities it finds as complete literal strings. */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="border border-accent bg-accent px-7 py-4 font-mono text-meta text-accent-ink uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-transparent"
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
