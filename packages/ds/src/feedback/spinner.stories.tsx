import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Feedback/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] }
    }
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = { args: { size: 'md' } };

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
        </div>
    )
};
