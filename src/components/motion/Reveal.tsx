import { useLayoutEffect, useRef } from 'react'
import type { ElementType, ReactNode } from 'react'
import { gsap } from '../../lib/gsap'
import { DURATION, EASE, prefersReducedMotion } from '../../lib/motion'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  delay?: number
  y?: number
  className?: string
  when?: 'load' | 'scroll'
}

/**
 * Entrance animation for a single element.
 *
 * 'load'   — plays immediately (above-the-fold content).
 * 'scroll' — released once by a ScrollTrigger when the element enters view.
 *
 * The tween lives inside `gsap.context()` scoped to the element ref and the
 * cleanup calls `ctx.revert()`, which kills the tween, its ScrollTrigger, and
 * any inline styles — which is what keeps it safe under StrictMode's double
 * effect invocation. Reduced motion returns early and renders the final state.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  y = 28,
  className,
  when = 'load',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: DURATION.reveal,
          ease: EASE.out,
          delay,
          scrollTrigger:
            when === 'scroll'
              ? { trigger: el, start: 'top 85%', once: true }
              : undefined,
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [delay, y, when])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
