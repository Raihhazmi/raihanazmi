import { siteContent } from '../../lib/content'
import { primaryNav } from '../../lib/nav'
import { Container } from './Container'

export function Footer() {
  const { site, person } = siteContent

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-9 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-h3 tracking-tight">{person.name}</p>
          <p className="mt-3 max-w-text text-body text-text-muted">
            {person.positioning.full}
          </p>
          <p className="mt-5 font-mono text-meta text-text-muted uppercase tracking-[0.18em]">
            {site.domain}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-4">
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
      </Container>

      <Container className="border-t border-line py-6">
        <p className="font-mono text-meta text-text-muted uppercase tracking-[0.18em]">
          © {new Date().getFullYear()} {person.fullName}
        </p>
      </Container>
    </footer>
  )
}
