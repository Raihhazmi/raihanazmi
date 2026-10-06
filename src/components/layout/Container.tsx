import type { ElementType, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  as?: ElementType
  className?: string
}

const BASE = 'mx-auto w-full max-w-page px-gutter'

/**
 * Horizontal rhythm for every band of the page: one max width, one gutter.
 * Compose with Section rather than adding padding directly.
 */
export function Container({ children, as: Tag = 'div', className }: ContainerProps) {
  return <Tag className={className ? `${BASE} ${className}` : BASE}>{children}</Tag>
}
