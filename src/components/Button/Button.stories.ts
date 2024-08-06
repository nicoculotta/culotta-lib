import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    isFullWidth: false,
    hasBorder: true,
    isDisabled: false,
  },
  argTypes: {
    variants: {
      options: ['primary', 'secondary'],
      control: 'select',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    isFullWidth: true,
  },
}

export const Secondary: Story = {
  args: {
    variants: 'secondary',
    label: 'Secondary Button',
  },
}

export const Large: Story = {
  args: {
    variants: 'primary',
    size: 'large',
    label: 'Large Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
}

export const WithoutBorder: Story = {
  args: {
    label: 'Without Border Button',
    hasBorder: false,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    isDisabled: true,
  },
}
