import React from 'react'
import './button.scss'

export interface ButtonProps {
  variants?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  label: string
  isFullWidth?: boolean
  hasBorder?: boolean
  onClick?: () => void
  isDisabled?: boolean
  className?: string
}

const Button = ({
  variants = 'primary',
  size = 'medium',
  label,
  isFullWidth = false,
  hasBorder = false,
  isDisabled = false,
  className,
}: ButtonProps) => {
  const mode = variants === 'primary' ? 'button--primary' : 'button--secondary'
  const width = isFullWidth ? 'button--fullWidth' : ''
  const border = hasBorder ? 'button--border' : ''
  const disabled = isDisabled ? 'button--disabled' : ''

  return (
    <button
      type="button"
      className={[
        'button',
        `button--${size}`,
        mode,
        width,
        border,
        disabled,
        className,
      ]
        .join(' ')
        .trim()}
      disabled={isDisabled}
    >
      {label}
    </button>
  )
}

export default Button
