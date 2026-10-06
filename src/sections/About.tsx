import { siteContent } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/motion/Reveal'

const { about } = siteContent

export function About() {
  return (
    <Section id="about">
      <Container>
        <Reveal when="scroll">
          <SectionHeading eyebrow="About" title={about.title} lede={about.lede} />
        </Reveal>

        <Reveal when="scroll" delay={0.08} className="mt-10 max-w-text">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-body text-text-muted first:mt-0">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </Container>
    </Section>
  )
}
