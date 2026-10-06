/**
 * Primary navigation. Framework-free and shared by Header and Footer so the
 * labels and anchors can never drift apart.
 *
 * Every href is an in-page anchor — there is no router on this site.
 */
export const primaryNav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const
