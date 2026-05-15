import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
    title: 'Display/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'danger'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] }
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { children: 'Button', variant: 'primary', size: 'md' } };

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
        </div>
    )
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    )
};

export const Disabled: Story = {
    render: () => (
        <div className="flex gap-3">
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="outline" disabled>Outline</Button>
            <Button variant="ghost" disabled>Ghost</Button>
        </div>
    )
};
