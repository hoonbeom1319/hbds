import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from './card';

const meta: Meta = {
    title: 'Surfaces/Card',
    tags: ['autodocs']
};

export default meta;

export const Default: StoryObj = {
    render: () => (
        <Card className="w-80 shadow-sm">
            <CardHeader>
                <CardTitle>카드 제목</CardTitle>
                <CardDescription>카드에 대한 설명입니다.</CardDescription>
            </CardHeader>
            <CardBody>
                <p className="text-sm text-slate-600">카드 본문 내용이 들어갑니다.</p>
            </CardBody>
            <CardFooter className="gap-2">
                <button className="text-sm text-primary-600 hover:underline">취소</button>
                <button className="rounded bg-primary-600 px-3 py-1 text-sm text-white">확인</button>
            </CardFooter>
        </Card>
    )
};
