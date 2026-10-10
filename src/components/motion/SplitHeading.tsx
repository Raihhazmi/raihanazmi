import { useLayoutEffect, useRef } from 'react'
import type { ElementType, ReactNode } from 'react'
import { gsap, SplitText } from '../../lib/gsap'
import { DURATION, EASE, prefersReducedMotion } from '../../lib/motion'

type SplitHeadingProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}

/**
 * Masked line reveal for hero display type. GSAP SplitText breaks the heading
 * into lines, each is wrapped in an overflow-hidden mask, and the lines rise
 * from below the mask on load. The split waits for `document.fonts.ready` so
 * line breaks are measured against the real webfont, not the fallback.
 *
 * `split.revert()` + `ctx.revert()` restore the original DOM and strip styles
 * on cleanup, keeping it StrictMode-safe.
 */
export function SplitHeading({
  children,
  as: Tag = 'h1',
  className,
  delay = 0,
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) return

    let split: SplitText | null = null
    let tween: gsap.core.Tween | null = null
    let cancelled = false

    const ctx = gsap.context(() => {
      gsap.set(el, { autoAlpha: 0 })

      const run = () => {
        if (cancelled || !el) return
        split = new SplitText(el, { type: 'lines' })
        split.lines.forEach((line) => {
          const mask = document.createElement('span')
          mask.style.display = 'block'
          mask.style.overflow = 'hidden'
          line.parentNode?.insertBefore(mask, line)
          mask.appendChild(line)
        })
        gsap.set(el, { autoAlpha: 1 })
        tween = gsap.from(split.lines, {
          yPercent: 118,
          duration: DURATION.reveal,
          ease: EASE.out,
          stagger: 0.1,
          delay,
        })
      }

      if (typeof document !== 'undefined' && document.fonts?.ready) {
        document.fonts.ready.then(run)
      } else {
        run()
      }
    }, ref)

    return () => {
      cancelled = true
      tween?.kill()
      split?.revert()
      ctx.revert()
    }
  }, [delay])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
