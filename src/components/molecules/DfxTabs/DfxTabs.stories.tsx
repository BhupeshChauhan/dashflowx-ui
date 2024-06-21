import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { DfxTabs } from '.';

const meta: Meta<typeof DfxTabs> = {
  title: 'molecules/DfxTabs',
  component: DfxTabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    tabsArray: [
      {
        id: 1,
        title: 'Market',
        content: <div>Market</div>,
      },
      {
        id: 2,
        title: 'Market',
        content: <div>Market</div>,
      },
    ],
    defaultActive: 1
  }
};

