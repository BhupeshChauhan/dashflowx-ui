import type { Meta, StoryObj } from '@storybook/react';
import { DfxFaq } from '.';

const meta: Meta<typeof DfxFaq> = {
  title: 'organisms/DfxFaq',
  component: DfxFaq,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'We invest in the world’s potential',
    description:
      'Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.',
    accordionItems: [
      {
        value: 'item-1',
        title: 'Is it accessible?',
        description: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        value: 'item-2',
        title: 'Is it styled?',
        description:
          'Yes. It comes with default styles that matches the other components&apos; aesthetic.',
      },
      {
        value: 'item-3',
        title: 'Is it animated?',
        description:
          "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ],
    accordionVarient: 'one',
    varient: 'basic',
  },
};
