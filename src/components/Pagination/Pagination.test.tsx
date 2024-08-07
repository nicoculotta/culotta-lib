import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Pagination from './Pagination'

describe('Pagination', () => {
  const defaultProps = {
    nextLabel: 'Next',
    previousLabel: 'Previous',
    handlePageChange: jest.fn(),
    currentPage: 2,
    totalPages: 5,
  }

  it('renders Previous and Next buttons correctly', () => {
    render(<Pagination {...defaultProps} />)
    expect(screen.getByText('Previous')).toBeDefined()
    expect(screen.getByText('Next')).toBeDefined()
  })

  it('click on Next button', () => {
    render(<Pagination {...defaultProps} />)
    const nextButton = screen.getByText('Next')
    fireEvent.click(nextButton)
    expect(defaultProps.handlePageChange).toHaveBeenCalledWith(3)
  })

  it('click on Previous button', () => {
    render(<Pagination {...defaultProps} />)
    const previousButton = screen.getByText('Previous')
    fireEvent.click(previousButton)
    expect(defaultProps.handlePageChange).toHaveBeenCalledWith(1)
  })
})
