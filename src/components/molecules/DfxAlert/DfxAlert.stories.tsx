import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { DfxAlert } from '.';
import { RocketIcon } from 'lucide-react';

const meta: Meta<typeof DfxAlert> = {
  title: 'molecules/DfxAlert',
  component: DfxAlert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Basic',
    description: 'This is a basic alert',
    variant: 'basic',
    prefix: (<RocketIcon className="h-4 w-4" />)
  }
};

