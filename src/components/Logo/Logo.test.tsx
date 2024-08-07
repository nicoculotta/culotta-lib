import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Logo from './Logo'

describe('Logo', () => {
  it('renders correctly', () => {
    render(<Logo />)
    expect(screen.getByText('Pokédex')).toBeInTheDocument()
  })
})
