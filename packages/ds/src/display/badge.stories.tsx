import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
    title: 'Display/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        variant: { control: 'select', options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] },
        size: { control: 'select', options: ['sm', 'md'] }
    }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: 'Badge', variant: 'default' } };

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
        </div>
    )
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
        </div>
    )
};

export const WithDot: Story = {
    name: 'With Status Dot',
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge variant="success">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-success inline-block" />
                Active
            </Badge>
            <Badge variant="default">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 inline-block" />
                Inactive
            </Badge>
            <Badge variant="warning">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-warning inline-block" />
                Pending
            </Badge>
        </div>
    )
};
