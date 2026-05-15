import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
    title: 'Forms/Toggle',
    component: Toggle,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] }
    }
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = { args: { children: 'Bold', size: 'md' } };

export const Pressed: Story = { args: { children: 'Bold', defaultPressed: true } };

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Toggle size="sm">B</Toggle>
            <Toggle size="md">B</Toggle>
            <Toggle size="lg">B</Toggle>
        </div>
    )
};
