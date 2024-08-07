import React from 'react'
import { render, screen } from '@testing-library/react'
import Table from './Table'

describe('Table', () => {
  it('renders the table with the correct headers', () => {
    render(
      <Table
        headers={['Name', 'Age']}
        data={[
          ['Pikachu', 'Bulbasour'],
          ['20', '30'],
        ]}
      />
    )
    expect(screen.getByText('Name')).toBeDefined()
    expect(screen.getByText('Age')).toBeDefined()
  })
})
