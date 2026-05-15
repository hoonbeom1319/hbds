import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../display/button';
import { Popover, PopoverTrigger, PopoverContent } from './popover';

const meta: Meta = {
    title: 'Overlay/Popover',
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
                <p className="text-sm font-semibold">Dimensions</p>
                <p className="text-xs text-muted mt-1">Set the dimensions for the layer.</p>
            </PopoverContent>
        </Popover>
    )
};

export const WithForm: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-semibold">Edit name</p>
                    <input className="rounded border border-border px-2 py-1 text-sm w-full" placeholder="Enter name" />
                    <Button size="sm">Save</Button>
                </div>
            </PopoverContent>
        </Popover>
    )
};
