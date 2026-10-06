import type { ReactNode } from 'react'

type SectionHeadingProps = {
  /** Small mono label above the title, e.g. "Selected work". */
  eyebrow: ReactNode
  title: ReactNode
  /** Optional supporting sentence. Held to a readable measure. */
  lede?: ReactNode
  className?: string
}

export function SectionHeading({ eyebrow, title, lede, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="font-mono text-meta text-accent-strong uppercase tracking-[0.18em]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-h2 max-w-text">{title}</h2>
      {lede ? <p className="mt-6 max-w-text text-body text-text-muted">{lede}</p> : null}
    </div>
  )
}
