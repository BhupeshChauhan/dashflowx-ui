import type { Meta, StoryObj } from '@storybook/react';
import { DfxAlertDialog } from '.';

const meta: Meta<typeof DfxAlertDialog> = {
  title: 'molecules/DfxAlertDialog',
  component: DfxAlertDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    actionButton: 'Open Dialog',
    title: 'Basic',
    description: 'This is a basic alert',
    variant: 'basic'
  }
};

