import React from 'react'
import { render, screen } from '@testing-library/react'
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
})
