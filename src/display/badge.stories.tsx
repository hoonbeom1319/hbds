import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
    title: 'Display/Badge',
    component: Badge,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: 'Badge',
        className: 'bg-primary-100 text-primary-700 rounded-full px-2 py-0.5 text-xs font-medium'
    }
};

export const Danger: Story = {
    args: {
        children: 'Error',
        className: 'bg-red-100 text-red-700 rounded-full px-2 py-0.5 text-xs font-medium'
    }
};
