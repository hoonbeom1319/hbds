import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Forms/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    args: {
        placeholder: '내용을 입력해주세요'
    }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    render: (args) => (
        <div className="w-80">
            <Textarea {...args} />
        </div>
    )
};

export const Disabled: Story = {
    args: { disabled: true, defaultValue: '비활성화 상태' },
    render: (args) => (
        <div className="w-80">
            <Textarea {...args} />
        </div>
    )
};

export const Invalid: Story = {
    args: { invalid: true, defaultValue: '오류 상태' },
    render: (args) => (
        <div className="w-80">
            <Textarea {...args} />
        </div>
    )
};
