import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
    title: 'Display/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
        children: 'Primary',
        className: 'rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-700'
    }
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge className="bg-primary-100 text-primary-700 rounded-full px-2.5 py-0.5 text-xs font-medium">Primary</Badge>
            <Badge className="bg-secondary-100 text-secondary-700 rounded-full px-2.5 py-0.5 text-xs font-medium">Secondary</Badge>
            <Badge className="bg-tertiary-100 text-tertiary-700 rounded-full px-2.5 py-0.5 text-xs font-medium">Tertiary</Badge>
            <Badge className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">Neutral</Badge>
            <Badge className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-600">Info</Badge>
            <Badge className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600">Success</Badge>
            <Badge className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-600">Warning</Badge>
            <Badge className="rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-medium text-rose-600">Danger</Badge>
        </div>
    )
};

export const Solid: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge className="bg-primary-600 rounded-full px-2.5 py-0.5 text-xs font-medium text-white">Primary</Badge>
            <Badge className="bg-secondary-600 rounded-full px-2.5 py-0.5 text-xs font-medium text-white">Secondary</Badge>
            <Badge className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-xs font-medium text-white">Success</Badge>
            <Badge className="rounded-full bg-rose-500 px-2.5 py-0.5 text-xs font-medium text-white">Danger</Badge>
        </div>
    )
};

export const WithDot: Story = {
    name: 'With Status Dot',
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Active
            </Badge>
            <Badge className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                Inactive
            </Badge>
            <Badge className="flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-600">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Pending
            </Badge>
        </div>
    )
};
