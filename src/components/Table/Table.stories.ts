import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Table from './Table'

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    headers: ['Name', 'Type', 'Height', 'Weight'],
    data: [
      ['Pikachu', 'Electric', '0.4', '6.0'],
      ['Charmander', 'Fire', '0.6', '8.5'],
      ['Bulbasaur', 'Grass', '0.7', '6.9'],
      ['Squirtle', 'Water', '0.5', '9.0'],
    ],
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTable: Story = {}
