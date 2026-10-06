/**
 * Motion language for the portfolio.
 *
 * GSAP is the only animation dependency. Everything funnels through this file
 * so easing/timing stay consistent and there is exactly one place to change the
 * feel of the site.
 */

export const EASE = {
  out: 'power3.out',
  inOut: 'power2.inOut',
} as const

export const DURATION = {
  reveal: 0.7,
} as const

/**
 * Reads the user's motion preference at call time (not module load time) so a
 * change to the OS setting is picked up on the next mount.
 *
 * Callers must render the final state un-animated when this returns true.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  if (typeof window.matchMedia !== 'function') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
