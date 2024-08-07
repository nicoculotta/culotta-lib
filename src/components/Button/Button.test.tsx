import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button label="Test Button" isFullWidth={true} />)
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('renders with a primary color', () => {
    render(<Button label="Test Button" className="button--primary" />)
    expect(screen.getByText('Test Button')).toHaveClass('button--primary')
  })

  it('renders disabled button', () => {
    render(<Button label="Test Button" isDisabled={true} />)
    expect(screen.getByText('Test Button')).toBeDisabled()
  })
})
