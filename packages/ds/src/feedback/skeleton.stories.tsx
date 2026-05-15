import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Feedback/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    parameters: { layout: 'padded' }
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = { args: { className: 'h-4 w-48' } };

export const Card: Story = {
    render: () => (
        <div className="flex flex-col gap-3 w-72">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex items-center gap-2 pt-1">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex flex-col gap-1 flex-1">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-3 w-16" />
                </div>
            </div>
        </div>
    )
};

export const List: Story = {
    render: () => (
        <div className="flex flex-col gap-2 w-64">
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                    <div className="flex flex-col gap-1 flex-1">
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-2/3" />
                    </div>
                </div>
            ))}
        </div>
    )
};
