import { Button, Dialog, Input, Label } from '@dashflowx/core';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'Element/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    dialogTrigger: <Button variant="outline">Edit Profile</Button>,
    dialogTitle: 'Edit profile',
    dialogDescription:
      "Make changes to your profile here. Click save when you're done.",
    dialogContent: (
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" value="@peduarte" className="col-span-3" />
        </div>
      </div>
    ),
    dialogFooter: <Button type="submit">Save changes</Button>,
  },
};
