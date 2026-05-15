import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import { Input } from '../forms/input';
import { Label } from '../forms/label';
import { Button } from '../display/button';

const meta: Meta = {
    title: 'Surfaces/Tabs',
    tags: ['autodocs'],
    parameters: { layout: 'padded' }
};

export default meta;

export const Line: StoryObj = {
    name: 'Line (기본)',
    render: () => (
        <Tabs defaultValue="account" className="max-w-md">
            <TabsList>
                <TabsTrigger value="account">계정</TabsTrigger>
                <TabsTrigger value="password">비밀번호</TabsTrigger>
                <TabsTrigger value="notifications">알림</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="name">이름</Label>
                        <Input id="name" defaultValue="홍길동" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="email">이메일</Label>
                        <Input id="email" type="email" defaultValue="hong@example.com" />
                    </div>
                    <Button size="sm" className="self-end">저장</Button>
                </div>
            </TabsContent>
            <TabsContent value="password">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="current">현재 비밀번호</Label>
                        <Input id="current" type="password" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="new">새 비밀번호</Label>
                        <Input id="new" type="password" />
                    </div>
                    <Button size="sm" className="self-end">변경</Button>
                </div>
            </TabsContent>
            <TabsContent value="notifications">
                <p className="text-sm text-muted">알림 설정은 준비 중입니다.</p>
            </TabsContent>
        </Tabs>
    )
};

export const Pill: StoryObj = {
    name: 'Pill',
    render: () => (
        <Tabs defaultValue="overview" variant="pill" className="max-w-md">
            <TabsList>
                <TabsTrigger value="overview">개요</TabsTrigger>
                <TabsTrigger value="analytics">분석</TabsTrigger>
                <TabsTrigger value="reports">보고서</TabsTrigger>
                <TabsTrigger value="settings" disabled>설정</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                <p className="text-sm text-neutral-700">전체 서비스 현황을 한눈에 확인합니다.</p>
            </TabsContent>
            <TabsContent value="analytics">
                <p className="text-sm text-neutral-700">트래픽·전환율·체류 시간 분석 데이터입니다.</p>
            </TabsContent>
            <TabsContent value="reports">
                <p className="text-sm text-neutral-700">월별 리포트를 다운로드할 수 있습니다.</p>
            </TabsContent>
        </Tabs>
    )
};

export const Disabled: StoryObj = {
    render: () => (
        <Tabs defaultValue="a" className="max-w-sm">
            <TabsList>
                <TabsTrigger value="a">활성</TabsTrigger>
                <TabsTrigger value="b" disabled>비활성</TabsTrigger>
                <TabsTrigger value="c">활성</TabsTrigger>
            </TabsList>
            <TabsContent value="a"><p className="text-sm text-neutral-700">첫 번째 탭 콘텐츠</p></TabsContent>
            <TabsContent value="b"><p className="text-sm text-neutral-700">두 번째 탭 콘텐츠</p></TabsContent>
            <TabsContent value="c"><p className="text-sm text-neutral-700">세 번째 탭 콘텐츠</p></TabsContent>
        </Tabs>
    )
};
