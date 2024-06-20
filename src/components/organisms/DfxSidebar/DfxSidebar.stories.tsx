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
    profileImage:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    profileName: 'John Doe',
    profileDescription: 'john@example.com',
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
    profileImage:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    profileName: 'John Doe',
    profileDescription: 'john@example.com',
  },
};
