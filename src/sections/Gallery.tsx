import { siteContent } from '../lib/content'
import type { GalleryEntry } from '../lib/content'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Reveal } from '../components/motion/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const { gallery } = siteContent

const aspectClass: Record<GalleryEntry['aspect'], string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[16/10]',
  square: 'aspect-square',
}

export function Gallery() {
  return (
    <Section id="gallery" tone="light">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Gallery"
          kanji="絵"
          title="Plates & studies."
          lede="A working visual index — material, rhythm, and light, arranged as an editorial grid."
        />

        <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <Reveal
              key={item.id}
              when="scroll"
              delay={(index % 4) * 0.06}
              className={item.aspect === 'landscape' ? 'sm:col-span-2' : ''}
            >
              <figure className="group flex h-full flex-col bg-paper p-5">
                <div className={`overflow-hidden ${aspectClass[item.aspect]}`}>
                  <img
                    src={item.src}
                    alt={`${item.label} plate ${item.no} — ${item.caption}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-3 font-mono text-meta uppercase tracking-[0.14em]">
                  <span className="text-text-muted">
                    <span className="text-accent-strong">No. {item.no}</span> —{' '}
                    {item.label}
                  </span>
                  <span className="hidden text-text-muted sm:inline">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
