import { useLayoutEffect, useRef } from 'react'
import type { ElementType, ReactNode } from 'react'
import gsap from 'gsap'
import { DURATION, EASE, prefersReducedMotion } from '../../lib/motion'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  /** Seconds to wait before starting. Use small increments for stagger. */
  delay?: number
  /** Vertical offset in px to travel from. Keep subtle: large values read as gimmicky. */
  y?: number
  className?: string
  /**
   * 'load'  — animate as soon as the effect runs. Use for above-the-fold
   *           content (header, hero) where waiting for a scroll would mean
   *           animating nothing the user is looking at.
   * 'scroll' — hold the element hidden until it enters the viewport, then
   *           play once. Use for everything below the fold.
   */
  when?: 'load' | 'scroll'
}

/**
 * Entrance animation for a single element.
 *
 * React-safety notes:
 * - The tween is created inside `gsap.context()` scoped to this element's ref.
 * - Cleanup calls `ctx.revert()`, which kills the tween *and* strips the inline
 *   styles GSAP wrote, so nothing leaks into the DOM after unmount.
 * - React StrictMode double-invokes effects in dev (mount -> unmount -> mount).
 *   Each mount builds its own context and the teardown reverts it, so the
 *   animation never runs twice or leaves orphaned styles behind.
 * - `useLayoutEffect` runs before paint, so the initial hidden state is never
 *   visible as a flash.
 * - When the user prefers reduced motion we return early and render the final
 *   state immediately, with no transform applied at all.
 * - In 'scroll' mode the tween is created paused, so the element holds its
 *   hidden state without wasting frames, and an IntersectionObserver releases
 *   it exactly once. If the observer never fires the content simply stays
 *   below the fold — which is where it already was.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  y = 20,
  className,
  when = 'load',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) return

    if (when === 'load') {
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
          },
        )
      }, ref)
      return () => ctx.revert()
    }

    let tween: gsap.core.Tween | null = null
    const ctx = gsap.context(() => {
      tween = gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: DURATION.reveal,
          ease: EASE.out,
          delay,
          paused: true,
        },
      )
    }, ref)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer.disconnect()
          tween?.play()
          return
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      ctx.revert()
    }
  }, [delay, y, when])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
