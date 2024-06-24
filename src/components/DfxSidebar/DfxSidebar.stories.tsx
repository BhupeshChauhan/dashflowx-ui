import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DfxSidebar } from '.';
import { ArrowRight } from 'lucide-react';

const meta: Meta<typeof DfxSidebar> = {
  title: 'organisms/DfxSidebar',
  component: DfxSidebar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    logo: <ArrowRight />,
    expanded: true,
    menuArrays: [
      {
        key: '1',
        title: 'Dashboard',
        path: '/admin',
        active: true,
        menuIcon: <ArrowRight />,
      },
      {
        key: '2',
        title: 'Applicants',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
      {
        key: '3',
        title: 'Clients',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
    ],
    toggleExpand: () => {},
    variant: 'basic',
    menuType: 'a',
  },
};

export const One: Story = {
  args: {
    logo: <ArrowRight />,
    expanded: true,
    menuArrays: [
      {
        key: '1',
        title: 'Dashboard',
        path: '/admin',
        active: true,
        menuIcon: <ArrowRight />,
      },
      {
        key: '2',
        title: 'Applicants',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
      {
        key: '3',
        title: 'Clients',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
    ],
    toggleExpand: () => {},
    variant: 'one',
    menuType: 'a',
    profileCard: (
      <></>
    )
  },
};

export const Two: Story = {
  args: {
    logo: <ArrowRight />,
    expanded: true,
    menuArrays: [
      {
        key: '1',
        title: 'Dashboard',
        path: '/admin',
        active: true,
        menuIcon: <ArrowRight />,
      },
      {
        key: '2',
        title: 'Applicants',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
      {
        key: '3',
        title: 'Clients',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
    ],
    toggleExpand: () => {},
    variant: 'two',
    menuType: 'a',
    profileCard: (
      <></>
    )
  },
};
