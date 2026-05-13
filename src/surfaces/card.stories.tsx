import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from './card';

const meta: Meta = {
    title: 'Surfaces/Card',
    tags: ['autodocs'],
    parameters: { layout: 'padded' }
};

export default meta;

export const Basic: StoryObj = {
    render: () => (
        <Card className="max-w-sm">
            <CardHeader>
                <CardTitle>카드 제목</CardTitle>
                <CardDescription className="text-neutral-500">카드에 대한 설명을 여기에 작성합니다.</CardDescription>
            </CardHeader>
            <CardBody>
                <p className="text-sm text-neutral-700">카드 본문 영역입니다. 임의의 콘텐츠를 넣을 수 있습니다.</p>
            </CardBody>
        </Card>
    )
};

export const WithFooter: StoryObj = {
    name: 'With Footer',
    render: () => (
        <Card className="max-w-sm">
            <CardHeader>
                <CardTitle>알림 설정</CardTitle>
                <CardDescription className="text-neutral-500">알림 수신 방식을 선택하세요.</CardDescription>
            </CardHeader>
            <CardBody>
                <div className="flex flex-col gap-2 text-sm text-neutral-700">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked /> 이메일 알림
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> SMS 알림
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked /> 앱 푸시 알림
                    </label>
                </div>
            </CardBody>
            <CardFooter className="gap-2">
                <button className="ml-auto rounded border px-3 py-1.5 text-sm">취소</button>
                <button className="rounded bg-primary-500 px-3 py-1.5 text-sm text-white">저장</button>
            </CardFooter>
        </Card>
    )
};

export const Grid: StoryObj = {
    name: 'Card Grid',
    render: () => (
        <div className="grid grid-cols-3 gap-4">
            {[
                { title: '총 사용자', value: '12,483', diff: '+8.2%' },
                { title: '이번 달 매출', value: '₩4,210,000', diff: '+3.5%' },
                { title: '신규 주문', value: '342', diff: '-1.2%' }
            ].map((item) => (
                <Card key={item.title}>
                    <CardHeader>
                        <CardDescription className="text-neutral-500 text-xs">{item.title}</CardDescription>
                        <CardTitle className="text-2xl">{item.value}</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className={`text-xs font-medium ${item.diff.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                            {item.diff} 전월 대비
                        </span>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
};
