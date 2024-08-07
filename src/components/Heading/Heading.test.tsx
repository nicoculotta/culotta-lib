import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Heading from './Heading'

describe('Heading', () => {
  it('renders correctly', () => {
    render(
      <Heading as="h3" textAlign="left" size="m" isBold={true}>
        Test Heading
      </Heading>
    )
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
  })

  it('renders h2, large, center', () => {
    render(
      <Heading as="h2" textAlign="center" size="l">
        Test Heading
      </Heading>
    )
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
    expect(screen.getByText('Test Heading')).toHaveClass(
      'heading--align-center'
    )
    expect(screen.getByText('Test Heading')).toHaveClass('heading--l')
  })

  it('renders h1, xl, right', () => {
    render(
      <Heading as="h1" textAlign="right" size="xl">
        Test Heading
      </Heading>
    )
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
    expect(screen.getByText('Test Heading')).toHaveClass('heading--align-right')
    expect(screen.getByText('Test Heading')).toHaveClass('heading--xl')
  })

  it('renders h4, s', () => {
    render(
      <Heading as="h4" size="s">
        Test Heading
      </Heading>
    )
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
    expect(screen.getByText('Test Heading')).toHaveClass('heading--s')
  })

  it('renders h5, 2xs', () => {
    render(
      <Heading as="h5" size="2xs">
        Test Heading
      </Heading>
    )
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
    expect(screen.getByText('Test Heading')).toHaveClass('heading--2xs')
  })

  it('renders h6, xs', () => {
    render(
      <Heading as="h6" size="xs">
        Test Heading
      </Heading>
    )
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
    expect(screen.getByText('Test Heading')).toHaveClass('heading--xs')
  })

  it('aplica la clase bold cuando isBold es true', () => {
    render(
      <Heading size="m" as="h3" isBold={true}>
        Test Heading
      </Heading>
    )
    expect(screen.getByText('Test Heading')).toHaveClass('heading--bold')
  })
})
