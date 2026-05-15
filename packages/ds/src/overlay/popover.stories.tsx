import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../display/button';
import { Input } from '../forms/input';
import { Label } from '../forms/label';
import { Popover, PopoverTrigger, PopoverContent } from './popover';

const meta: Meta = {
    title: 'Overlay/Popover',
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
                <p className="text-sm font-semibold">Dimensions</p>
                <p className="text-xs text-muted mt-1">Set the dimensions for the layer.</p>
            </PopoverContent>
        </Popover>
    )
};

export const WithForm: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-semibold">이름 수정</p>
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="popover-name">이름</Label>
                        <Input id="popover-name" placeholder="이름을 입력하세요" />
                    </div>
                    <Button size="sm">저장</Button>
                </div>
            </PopoverContent>
        </Popover>
    )
};
