import { Container } from './Container'
import { primaryNav } from '../../lib/nav'
import { siteContent } from '../../lib/content'

const { site, person } = siteContent
const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="tone-dark border-t border-line py-12">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-display text-h2 leading-none">{person.name}</p>
            <p className="mt-3 font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
              {site.domain}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
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
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
            © {year} {person.fullName}
          </p>
          <p className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
            {site.tagline}
          </p>
        </div>
      </Container>
    </footer>
  )
}
