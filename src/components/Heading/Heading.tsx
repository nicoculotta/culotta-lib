import React, { ReactNode } from 'react'
import './heading.scss'

export interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: ReactNode
  textAlign?: 'left' | 'center' | 'right'
  isBold?: boolean
  size: 'xl' | 'l' | 'm' | 's' | 'xs' | '2xs'
}

const Heading = ({
  as = 'h3',
  children,
  textAlign = 'left',
  isBold = false,
  size = 'm',
  ...props
}: HeadingProps) => {
  const Tag = as
  return (
    <Tag
      className={[
        'heading',
        `heading--${size}`,
        `heading--align-${textAlign}`,
      ].join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Heading
