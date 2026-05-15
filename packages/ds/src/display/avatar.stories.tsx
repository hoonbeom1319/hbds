import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarImage, AvatarFallback } from './avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Display/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] }
    }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
};

export const WithFallback: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="/broken-image.jpg" alt="User" />
            <AvatarFallback>HB</AvatarFallback>
        </Avatar>
    )
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-end gap-3">
            <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
            <Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>
            <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
            <Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
        </div>
    )
};
