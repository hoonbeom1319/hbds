import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
    title: 'Feedback/Progress',
    component: Progress,
    tags: ['autodocs'],
    parameters: { layout: 'padded' },
    argTypes: {
        value: { control: { type: 'range', min: 0, max: 100 } }
    }
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = { args: { value: 60, className: 'w-80' } };

export const States: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-80">
            <div>
                <p className="mb-1.5 text-sm text-neutral-500">0%</p>
                <Progress value={0} />
            </div>
            <div>
                <p className="mb-1.5 text-sm text-neutral-500">33%</p>
                <Progress value={33} />
            </div>
            <div>
                <p className="mb-1.5 text-sm text-neutral-500">66%</p>
                <Progress value={66} />
            </div>
            <div>
                <p className="mb-1.5 text-sm text-neutral-500">100%</p>
                <Progress value={100} />
            </div>
        </div>
    )
};
