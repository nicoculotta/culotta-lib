import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Logo from './Logo'

const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {},
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLogo: Story = {}
