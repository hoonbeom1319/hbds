import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
    title: 'Primitives/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' }
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button'
    }
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true
    }
};

export const AsChild: Story = {
    args: {
        asChild: true,
        children: <a href="#">Link styled as button</a>
    }
};
