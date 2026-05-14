import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from './select';

const meta: Meta = {
    title: 'Forms/Select',
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;

export const Default: StoryObj = {
    render: () => (
        <div className="w-60">
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="과일을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="apple">사과</SelectItem>
                    <SelectItem value="banana">바나나</SelectItem>
                    <SelectItem value="cherry">체리</SelectItem>
                    <SelectItem value="grape" disabled>
                        포도 (품절)
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
};

export const Grouped: StoryObj = {
    render: () => (
        <div className="w-60">
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="도시를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>대한민국</SelectLabel>
                        <SelectItem value="seoul">서울</SelectItem>
                        <SelectItem value="busan">부산</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                        <SelectLabel>일본</SelectLabel>
                        <SelectItem value="tokyo">도쿄</SelectItem>
                        <SelectItem value="osaka">오사카</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
};

export const Disabled: StoryObj = {
    render: () => (
        <div className="w-60">
            <Select disabled>
                <SelectTrigger>
                    <SelectValue placeholder="선택할 수 없음" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="a">A</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
};
