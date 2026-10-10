import type { ReactNode } from 'react'

type SectionHeadingProps = {
  index?: string
  eyebrow: ReactNode
  title: ReactNode
  lede?: ReactNode
  kanji?: string
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  kanji,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-6 border-b border-line pb-4">
        <p className="font-mono text-meta uppercase tracking-[0.18em]">
          {index ? <span className="text-accent-strong">{index}</span> : null}
          {index ? <span className="mx-3 text-text-muted">/</span> : null}
          <span className="text-text-muted">{eyebrow}</span>
        </p>
        {kanji ? (
          <span aria-hidden="true" className="font-display text-h3 leading-none text-text-muted">
            {kanji}
          </span>
        ) : null}
      </div>

      <h2 className="mt-8 max-w-text text-h2">{title}</h2>
      {lede ? <p className="mt-6 max-w-text text-body text-text-muted">{lede}</p> : null}
    </div>
  )
}
