import type { Meta, StoryObj } from '@storybook/react';

import { ToggleGroup, ToggleGroupItem } from './toggle-group';

const meta: Meta<typeof ToggleGroup> = {
    title: 'Forms/ToggleGroup',
    component: ToggleGroup,
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Single: Story = {
    render: () => (
        <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
    )
};

export const Multiple: Story = {
    render: () => (
        <ToggleGroup type="multiple" defaultValue={['bold']}>
            <ToggleGroupItem value="bold">B</ToggleGroupItem>
            <ToggleGroupItem value="italic">I</ToggleGroupItem>
            <ToggleGroupItem value="underline">U</ToggleGroupItem>
        </ToggleGroup>
    )
};
