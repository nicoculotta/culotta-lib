import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Heading from './Heading'

const meta = {
  title: 'Example/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    as: 'h3',
    size: 'm',
  },
  argTypes: {},
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const MainTitle: Story = {
  args: {
    children: 'Heading',
    as: 'h1',
  },
}
