import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Card from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'Tangela',
    variant: 'purple',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
    onClick: fn(),
  },
  argTypes: {
    variant: {
      options: ['purple', 'yellow', 'white'],
      control: 'select',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCard: Story = {}
