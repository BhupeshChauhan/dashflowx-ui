import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { DfxAdminLayout } from '.';

const meta: Meta<typeof DfxAdminLayout> = {
  title: 'layout/DfxAdminLayout',
  component: DfxAdminLayout,
  tags: ['autodocs'],
};

const itemsArray = [
  {
    id: '1',
    title: 'Home',
    path: '/',
    active: true,
    menuIcon: <ArrowRight />,
  },
  {
    id: '2',
    title: 'About',
    path: '/About',
    active: false,
    menuIcon: <ArrowRight />,
  },
  {
    id: '3',
    title: 'Services',
    path: '/Services',
    active: false,
    menuIcon: <ArrowRight />,
  },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    NavActions: <h1>Dashflow-x</h1>,
    libraryType: 'react',
    logo: <h1>Dashflow-x</h1>,
    expanded: true,
    menuArrays: itemsArray,
    toggleExpand: () => {},
    variant: 'basic',
    menuType: 'a',
    children: <></>,
  },
};

export const One: Story = {
  args: {
    NavActions: <h1>Dashflow-x</h1>,
    libraryType: 'react',
    logo: <h1>Dashflow-x</h1>,
    expanded: true,
    menuArrays: itemsArray,
    toggleExpand: () => {},
    variant: 'one',
    menuType: 'a',
    children: <div className="h-full w-full bg-white"></div>,
    profileImage: <></>,
    profileName: 'John Doe',
    profileDescription: 'john@example.com',
    profilePath: '/profile',
  },
};

export const Two: Story = {
  args: {
    NavActions: <h1>Dashflow-x</h1>,
    libraryType: 'react',
    logo: <h1>Dashflow-x</h1>,
    expanded: true,
    menuArrays: itemsArray,
    toggleExpand: () => {},
    variant: 'two',
    menuType: 'a',
    children: <div className="h-full w-full bg-white"></div>,
    profileImage: <></>,
    profileName: 'John Doe',
    profileDescription: 'john@example.com',
    profilePath: '/profile',
  },
};

export const Four: Story = {
  args: {
    NavActions: <h1>Dashflow-x</h1>,
    libraryType: 'react',
    logo: <h1>Dash</h1>,
    expanded: false,
    menuArrays: itemsArray,
    toggleExpand: () => {},
    variant: 'four',
    menuType: 'a',
    children: <div className="h-full w-full bg-white"></div>,
    profileImage: <></>,
    profileName: 'John Doe',
    profileDescription: 'john@example.com',
    profilePath: '/profile',
  },
};
