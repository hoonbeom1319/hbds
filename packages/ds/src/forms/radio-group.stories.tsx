import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from './label';

const meta: Meta<typeof RadioGroup> = {
    title: 'Forms/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;

export const Default: StoryObj = {
    render: () => (
        <RadioGroup defaultValue="card">
            <div className="flex items-center gap-2">
                <RadioGroupItem value="card" id="r-card" />
                <Label htmlFor="r-card">신용/체크 카드</Label>
            </div>
            <div className="flex items-center gap-2">
                <RadioGroupItem value="bank" id="r-bank" />
                <Label htmlFor="r-bank">계좌이체</Label>
            </div>
            <div className="flex items-center gap-2">
                <RadioGroupItem value="phone" id="r-phone" />
                <Label htmlFor="r-phone">휴대폰 결제</Label>
            </div>
        </RadioGroup>
    )
};

export const Disabled: StoryObj = {
    render: () => (
        <RadioGroup defaultValue="b">
            <div className="flex items-center gap-2">
                <RadioGroupItem value="a" id="d-a" disabled />
                <Label htmlFor="d-a">옵션 A (비활성)</Label>
            </div>
            <div className="flex items-center gap-2">
                <RadioGroupItem value="b" id="d-b" />
                <Label htmlFor="d-b">옵션 B</Label>
            </div>
        </RadioGroup>
    )
};
