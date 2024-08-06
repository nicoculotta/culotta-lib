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
}

const Button = ({
  variants = 'primary',
  size = 'medium',
  label,
  isFullWidth = false,
  hasBorder = false,
  isDisabled = false,
  ...props
}: ButtonProps) => {
  const mode = variants === 'primary' ? 'button--primary' : 'button--secondary'
  const width = isFullWidth ? 'button--fullWidth' : ''
  const border = hasBorder ? 'button--border' : ''
  const disabled = isDisabled ? 'button--disabled' : ''

  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode, width, border, disabled]
        .join(' ')
        .trim()}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
