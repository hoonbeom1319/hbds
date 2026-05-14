import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import type { CheckedState } from '@radix-ui/react-checkbox';
import { Checkbox } from './checkbox';
import { Label } from './label';

const meta: Meta<typeof Checkbox> = {
    title: 'Forms/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">이용 약관에 동의합니다</Label>
        </div>
    )
};

export const Checked: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Checkbox id="marketing" defaultChecked />
            <Label htmlFor="marketing">마케팅 수신 동의 (선택)</Label>
        </div>
    )
};

export const Disabled: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Checkbox id="locked" disabled defaultChecked />
            <Label htmlFor="locked">변경할 수 없음</Label>
        </div>
    )
};

export const Indeterminate: Story = {
    render: () => {
        const Demo = () => {
            const [state, setState] = useState<CheckedState>('indeterminate');
            return (
                <div className="flex items-center gap-2">
                    <Checkbox id="all" checked={state} onCheckedChange={setState} />
                    <Label htmlFor="all">전체 선택</Label>
                </div>
            );
        };
        return <Demo />;
    }
};
