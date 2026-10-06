import { Container } from './Container'
import { Reveal } from '../motion/Reveal'
import { primaryNav } from '../../lib/nav'

export function Header() {
  return (
    <header id="top" className="border-b border-line">
      <Container className="flex flex-col gap-7 py-7 sm:flex-row sm:items-end sm:justify-between sm:py-8">
        <Reveal delay={0} y={12}>
          <a
            href="#top"
            className="font-display text-h3 tracking-tight transition-colors duration-300 hover:text-accent-strong"
          >
            Raihan Azmi
          </a>
          <p className="mt-2 font-mono text-meta text-text-muted uppercase tracking-[0.18em]">
            raihanazmi.dev
          </p>
        </Reveal>

        <Reveal delay={0.08} y={12}>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 sm:gap-9">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-meta text-text-muted uppercase tracking-[0.18em] transition-colors duration-300 hover:text-accent-strong"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </Container>
    </header>
  )
}