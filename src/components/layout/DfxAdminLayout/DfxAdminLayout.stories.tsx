import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DfxAdminLayout } from '.';
import { ArrowRight } from 'lucide-react';

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
    menuIcon: (<ArrowRight />),
  },
  {
    id: '2',
    title: 'About',
    path: '/',
    active: false,
    menuIcon: (<ArrowRight />),
  },
  {
    id: '3',
    title: 'Services',
    path: '/',
    active: false,
    menuIcon: (<ArrowRight />),
  },
]

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
    children: <></>,
    profileCard: (
      <></>
    )
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
    children: <></>,
    profileCard: (
      <></>
    )
  },
};
