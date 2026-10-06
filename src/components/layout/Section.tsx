import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  id?: string
  className?: string
}

/**
 * Vertical band of the page. Owns the section-level spacing token so every
 * section breathes the same amount. Variants (background, borders) go through
 * className; structural spacing stays here.
 */
export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={className ? `py-section ${className}` : 'py-section'}>
      {children}
    </section>
  )
}
