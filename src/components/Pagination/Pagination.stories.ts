import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Pagination from './Pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    nextLabel: 'Next',
    previousLabel: 'Previous',
    currentPage: 1,
    totalPages: 10,
    handlePageChange: fn(),
  },
  argTypes: {
    currentPage: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPagination: Story = {}
