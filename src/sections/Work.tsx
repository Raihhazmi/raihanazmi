import { siteContent } from '../lib/content'
import type { ProjectEntry } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/motion/Reveal'

const { projects } = siteContent

const featuredProject = projects.find((project) => project.featured)
const secondaryProjects = projects.filter((project) => project !== featuredProject)

function ProjectCard({ project, featured = false }: { project: ProjectEntry; featured?: boolean }) {
  return (
    <article
      className={`flex h-full flex-col border border-line ${featured ? 'p-7 sm:p-10' : 'p-6 sm:p-7'}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
        <p className="font-mono text-meta text-accent-strong uppercase tracking-[0.18em]">
          {project.category}
        </p>
        <p className="font-mono text-meta text-text-muted uppercase tracking-[0.18em]">
          {project.platform}
        </p>
      </div>

      <h3 className={`mt-5 font-display tracking-tight ${featured ? 'text-h2' : 'text-h3'}`}>
        {project.name}
      </h3>

      <p className="mt-2 font-mono text-meta text-text-muted uppercase tracking-[0.18em]">
        {project.role}
      </p>

      <p lang={project.summaryLang} className="mt-6 text-body text-text-muted">
        {project.summary}
      </p>

      <div className="mt-8">
        <p className="font-mono text-meta text-accent-strong uppercase tracking-[0.18em]">
          Contributions
        </p>
        <ul className="mt-4 space-y-2">
          {project.contributions.map((contribution) => (
            <li key={contribution} className="flex gap-3 text-body text-text-muted">
              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 bg-accent" />
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-auto flex flex-wrap gap-2 pt-8">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="border border-line px-2.5 py-1 font-mono text-meta text-text-muted uppercase tracking-[0.14em]"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Work() {
  return (
    <Section id="work">
      <Container>
        <Reveal when="scroll">
          <SectionHeading
            eyebrow="Work"
            title="Selected projects"
            lede="The platform, the role, and what was actually built."
          />
        </Reveal>

        {featuredProject ? (
          <Reveal when="scroll" delay={0.06} className="mt-12">
            <ProjectCard project={featuredProject} featured />
          </Reveal>
        ) : null}

        {secondaryProjects.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {secondaryProjects.map((project, index) => (
              <Reveal key={project.id} when="scroll" delay={index * 0.06} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  )
}
