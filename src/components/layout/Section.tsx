import type { ReactNode } from 'react'

type Tone = 'light' | 'dark'

type SectionProps = {
  children: ReactNode
  id?: string
  tone?: Tone
  className?: string
  bordered?: boolean
}

export function Section({
  children,
  id,
  tone = 'light',
  className,
  bordered = true,
}: SectionProps) {
  const classes = [
    'relative py-section',
    tone === 'dark' ? 'tone-dark' : 'tone-light',
    bordered ? 'border-t border-line' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}
