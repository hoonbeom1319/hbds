import type { Meta, StoryObj } from '@storybook/react';
import { FormField, FormLabel, FormControl, FormDescription, FormError } from './field';
import { Input } from './input';

const meta: Meta = {
    title: 'Forms/FormField',
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;

export const Default: StoryObj = {
    render: () => (
        <FormField className="w-80">
            <FormLabel>이메일</FormLabel>
            <FormControl>
                <Input type="email" placeholder="you@example.com" />
            </FormControl>
            <FormDescription>업무용 이메일을 입력해 주세요.</FormDescription>
        </FormField>
    )
};

export const WithError: StoryObj = {
    render: () => (
        <FormField className="w-80" invalid>
            <FormLabel>이메일</FormLabel>
            <FormControl>
                <Input type="email" defaultValue="invalid@" />
            </FormControl>
            <FormError>올바른 이메일 형식이 아닙니다.</FormError>
        </FormField>
    )
};

export const Disabled: StoryObj = {
    render: () => (
        <FormField className="w-80">
            <FormLabel>이메일</FormLabel>
            <FormControl>
                <Input type="email" disabled defaultValue="locked@example.com" />
            </FormControl>
            <FormDescription>현재 변경할 수 없습니다.</FormDescription>
        </FormField>
    )
};
