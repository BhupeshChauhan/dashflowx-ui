import { AspectRatio } from '@dashflowx/core';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof AspectRatio> = {
  title: 'Element/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    ratio: 14 / 9,
    children: <>Title</>,
  },
};
