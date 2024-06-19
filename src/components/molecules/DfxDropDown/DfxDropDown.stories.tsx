import type { Meta, StoryObj } from '@storybook/react';
import { DfxDropDown } from '.';

const meta: Meta<typeof DfxDropDown> = {
  title: 'molecules/DfxDropDown',
  component: DfxDropDown,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    actionButton: 'Open Dropdown',
    dropdownItems: [
      {
        type: 'label',
        title: 'Title',
      },
    ],
  },
};
