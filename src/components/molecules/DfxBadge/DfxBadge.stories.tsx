import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { DfxBadge } from '.';
import { ArrowBigDown } from 'lucide-react';

const meta: Meta<typeof DfxBadge> = {
  title: 'molecules/DfxBadge',
  component: DfxBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    type: 'a',
    icon: (<ArrowBigDown className='w-4 h-4' />),
    textContent: 'Link',
    path: '/',
    variant: 'outline',
  },
};

export const One: Story = {
  args: {
    type: 'a',
    textContent: 'Link',
    icon: (<ArrowBigDown className='w-4 h-4' />),
    path: '/',
    variant: 'default',
  },
};
