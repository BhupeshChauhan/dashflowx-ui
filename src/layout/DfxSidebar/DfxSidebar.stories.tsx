import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { DfxSidebar } from '.';

const meta: Meta<typeof DfxSidebar> = {
  title: 'Layout/DfxSidebar',
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
        id: '1',
        title: 'Dashboard',
        path: '/admin',
        active: true,
        menuIcon: <ArrowRight />,
      },
      {
        id: '2',
        title: 'Applicants',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
      {
        id: '3',
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
        id: '1',
        title: 'Dashboard',
        path: '/admin',
        active: true,
        menuIcon: <ArrowRight />,
      },
      {
        id: '2',
        title: 'Applicants',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
      {
        id: '3',
        title: 'Clients',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
    ],
    toggleExpand: () => {},
    variant: 'one',
    menuType: 'a',
    profileImage: (<></>),
    profileName: 'John Doe',
    profileDescription: 'john@example.com',
    profilePath: '/profile',
  },
};

export const Two: Story = {
  args: {
    logo: <ArrowRight />,
    expanded: true,
    menuArrays: [
      {
        id: '1',
        title: 'Dashboard',
        path: '/admin',
        active: true,
        menuIcon: <ArrowRight />,
      },
      {
        id: '2',
        title: 'Applicants',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
      {
        id: '3',
        title: 'Clients',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
    ],
    toggleExpand: () => {},
    variant: 'two',
    menuType: 'a',
    profileImage: (<></>),
    profileName: 'John Doe',
    profileDescription: 'john@example.com',
    profilePath: '/profile',
  },
};

export const Three: Story = {
  args: {
    logo: <ArrowRight />,
    expanded: false,
    menuArrays: [
      {
        id: '1',
        title: 'Dashboard',
        path: '/admin',
        active: true,
        menuIcon: <ArrowRight />,
      },
      {
        id: '2',
        title: 'Applicants',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
      {
        id: '3',
        title: 'Clients',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
    ],
    toggleExpand: () => {},
    variant: 'three',
    menuType: 'a',
    profileImage: (<></>),
    profileName: 'John Doe',
    profileDescription: 'john@example.com',
    profilePath: '/profile',
  },
};
