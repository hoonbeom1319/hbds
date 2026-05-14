import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';
import { Label } from './label';

const meta: Meta<typeof Switch> = {
    title: 'Forms/Switch',
    component: Switch,
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Switch id="airplane" />
            <Label htmlFor="airplane">비행기 모드</Label>
        </div>
    )
};

export const Checked: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Switch id="wifi" defaultChecked />
            <Label htmlFor="wifi">Wi-Fi</Label>
        </div>
    )
};

export const Disabled: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Switch id="locked" disabled defaultChecked />
            <Label htmlFor="locked">잠금됨</Label>
        </div>
    )
};
