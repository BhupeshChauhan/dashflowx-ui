import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DfxNavBar } from '.';

const meta: Meta<typeof DfxNavBar> = {
  title: 'Layout/DfxNavBar',
  component: DfxNavBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    actions: (
      <>
        <button color="primary" className="mr-2 rounded-full">
          Sign In
        </button>

        <button className="rounded-full">Sign Up</button>
      </>
    ),
    variant: 'basic',
  },
};

export const One: Story = {
  args: {
    logo: (
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={''} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Dashflow X
        </span>
      </a>
    ),
    menuArrays: [
      {
        id: '1',
        title: 'Home',
        path: '/',
        active: true,
      },
      {
        id: '2',
        title: 'About',
        path: '/',
        active: false,
      },
      {
        id: '3',
        title: 'Services',
        path: '/',
        active: false,
      },
    ],
    actions: (
      <>
        <button color="primary" className="mr-2 rounded-full">
          Sign In
        </button>

        <button className="rounded-full">Sign Up</button>
      </>
    ),
    variant: 'one',
  },
};
