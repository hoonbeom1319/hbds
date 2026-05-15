import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
    title: 'Forms/Slider',
    component: Slider,
    tags: ['autodocs'],
    parameters: { layout: 'padded' }
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = { args: { defaultValue: [50], min: 0, max: 100, step: 1, className: 'w-64' } };

export const Disabled: Story = { args: { defaultValue: [30], disabled: true, className: 'w-64' } };
