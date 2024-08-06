import React from 'react'
import './Pagination.scss'
import Button from '../Button'

export interface PaginationProps {
  nextLabel: string
  previousLabel: string
  handlePageChange: (page: number) => void
  currentPage: number
  totalPages: number
  size?: 'small' | 'medium' | 'large'
}

const Pagination = ({
  nextLabel,
  previousLabel,
  handlePageChange,
  currentPage,
  totalPages,
  size = 'medium',
}: PaginationProps) => {
  return (
    <div className="pagination">
      <Button
        size={size}
        variants="secondary"
        hasBorder={true}
        label={previousLabel}
        onClick={() => handlePageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
      />
      <Button
        size={size}
        variants="secondary"
        hasBorder={true}
        label={nextLabel}
        onClick={() => handlePageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      />
    </div>
  )
}

export default Pagination
