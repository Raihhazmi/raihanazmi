import { useEffect, useState } from 'react'
import { Container } from './Container'
import { Reveal } from '../motion/Reveal'
import { primaryNav } from '../../lib/nav'
import { siteContent } from '../../lib/content'

const { person } = siteContent

function formatTime(timeZone: string): string {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone,
    }).format(new Date())
  } catch {
    return ''
  }
}

function Clock({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState(() => formatTime(timeZone))

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime(timeZone)), 30_000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return <span aria-hidden="true">{time}</span>
}

export function Header() {
  const { city, region, timeZone } = person.location

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md"
    >
      <Container className="flex flex-wrap items-center gap-x-6 gap-y-3 py-3">
        <Reveal delay={0} y={12} className="mr-auto">
          <a href="#top" className="flex items-baseline gap-3">
            <span className="font-display text-h3 leading-none tracking-tight">
              Raihan Azmi
            </span>
            <span className="hidden font-mono text-meta uppercase tracking-[0.18em] text-text-muted sm:inline">
              Portfolio
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.06} y={12} className="ml-auto hidden sm:block">
          <p className="text-right font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
            {city}, {region} · <Clock timeZone={timeZone} />
          </p>
        </Reveal>

        <Reveal delay={0.12} y={12} className="order-3 w-full sm:order-none sm:w-auto">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-5 sm:justify-end">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted transition-colors duration-300 hover:text-accent-strong"
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
