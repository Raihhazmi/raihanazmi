import { siteContent } from '../lib/content'
import type { ProjectEntry } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/motion/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const { projects } = siteContent

function ProjectCard({
  project,
  featured = false,
}: {
  project: ProjectEntry
  featured?: boolean
}) {
  return (
    <article
      className={`group relative flex h-full flex-col border border-line bg-ink-2 transition-colors duration-500 hover:border-accent ${
        featured ? 'p-8 sm:p-12' : 'p-7 sm:p-9'
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
          {project.no}
        </span>
        <span className="font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
          {project.platform}
        </span>
      </div>

      <p className="mt-8 font-mono text-meta uppercase tracking-[0.18em] text-text-muted">
        {project.category}
      </p>
      <h3
        className={`mt-3 font-display leading-none ${
          featured ? 'text-mega' : 'text-h2'
        }`}
      >
        {project.name}
      </h3>
      <p className="mt-3 font-mono text-meta uppercase tracking-[0.16em] text-text">
        {project.role}
      </p>
      <p className="mt-6 max-w-text text-body text-text-muted">{project.summary}</p>

      <div className={`mt-8 ${featured ? 'lg:columns-2 lg:gap-10' : ''}`}>
        <p className="mb-3 font-mono text-meta uppercase tracking-[0.18em] text-accent-strong">
          Contributions
        </p>
        <ul className="space-y-2">
          {project.contributions.map((contribution) => (
            <li
              key={contribution}
              className="flex gap-3 text-body text-text-muted"
            >
              <span aria-hidden="true" className="text-text-muted">
                —
              </span>
              {contribution}
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-auto flex flex-wrap gap-2 pt-8">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="border border-line px-3 py-1 font-mono text-meta uppercase tracking-[0.14em] text-text-muted transition-colors duration-500 group-hover:border-accent/40 group-hover:text-text"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.links.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-meta uppercase tracking-[0.18em] text-text-muted transition-colors duration-300 hover:text-accent-strong"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export function Work() {
  const featured = projects.find((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <Section id="work" tone="dark">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Selected Work"
          kanji="作"
          title="Systems shipped as products."
          lede="Android products carried from technical design document to a shipped interface — architecture, data shape, and UI decided together."
        />

        {featured ? (
          <Reveal when="scroll" className="mt-14">
            <ProjectCard project={featured} featured />
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal
              key={project.id}
              when="scroll"
              delay={index * 0.08}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
