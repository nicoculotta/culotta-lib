import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('renders correctly', () => {
    render(<Spinner />)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
