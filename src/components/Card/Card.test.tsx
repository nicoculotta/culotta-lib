import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Card from './Card'

describe('Card', () => {
  it('renders correctly', () => {
    render(
      <Card
        imageUrl="https://via.placeholder.com/150"
        name="Pikachu"
        onClick={() => {}}
        variant="purple"
      />
    )
    expect(screen.getByText('Pikachu')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveClass('card__image--purple')
  })

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn()
    render(
      <Card
        imageUrl="https://via.placeholder.com/150"
        name="Pikachu"
        onClick={mockOnClick}
        variant="purple"
      />
    )
    fireEvent.click(screen.getByText('Pikachu'))
    expect(mockOnClick).toHaveBeenCalled()
  })
})
