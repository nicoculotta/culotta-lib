import type { Meta, StoryObj } from '@storybook/react'
import CardDetails from './CardDetails'

const meta = {
  title: 'Components/CardDetails',
  component: CardDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'Tangela',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
    types: ['Grass', 'Poison'],
    stats: {
      headers: ['HP', 'Attack', 'Defense', 'Special Attack'],
      data: [[45, 49, 49, 65]],
    },
    weight: 69,
    height: 7,
  },
} satisfies Meta<typeof CardDetails>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCardDetails: Story = {}
