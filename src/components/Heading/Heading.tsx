import React, { ReactNode } from 'react'
import './heading.scss'

export interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: 'xl' | 'l' | 'm' | 's' | 'xs' | '2xs'
  children?: ReactNode
  textAlign?: 'left' | 'center' | 'right'
  isBold?: boolean
  className?: string
}

const Heading = ({
  as = 'h3',
  children,
  textAlign = 'left',
  isBold = false,
  size = 'm',
  className,
}: HeadingProps) => {
  const Tag = as
  return (
    <Tag
      className={[
        className,
        'heading',
        `heading--${size}`,
        `heading--align-${textAlign}`,
        isBold ? 'heading--bold' : '',
      ].join(' ')}
    >
      {children}
    </Tag>
  )
}

export default Heading
