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
    profileImage:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
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
    profileImage:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    profileName: 'John Doe',
    profileDescription: 'john@example.com',
    profilePath: '/profile',
  },
};
