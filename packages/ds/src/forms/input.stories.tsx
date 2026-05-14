import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
    title: 'Forms/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    args: {
        placeholder: '입력해주세요'
    }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    render: (args) => (
        <div className="w-80">
            <Input {...args} />
        </div>
    )
};

export const Password: Story = {
    args: { type: 'password', placeholder: '비밀번호' },
    render: (args) => (
        <div className="w-80">
            <Input {...args} />
        </div>
    )
};

export const Disabled: Story = {
    args: { disabled: true, defaultValue: '비활성화 상태' },
    render: (args) => (
        <div className="w-80">
            <Input {...args} />
        </div>
    )
};

export const Invalid: Story = {
    args: { invalid: true, defaultValue: 'invalid@' },
    render: (args) => (
        <div className="w-80">
            <Input {...args} />
        </div>
    )
};
