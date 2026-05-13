import type { Meta, StoryObj } from '@storybook/react';
import Container from './container';

const meta: Meta = {
    title: 'Layout/Container',
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' }
};

export default meta;

export const Mobile: StoryObj = {
    render: () => (
        <Container variant="mobile" className="bg-neutral-50 min-h-screen p-4">
            <div className="rounded-lg bg-white border p-4 text-sm text-neutral-700">
                max-w-[480px] 컨테이너 — 모바일 앱 레이아웃에 사용합니다.
            </div>
        </Container>
    )
};

export const WithContent: StoryObj = {
    name: 'With Page Content',
    render: () => (
        <Container variant="mobile" className="min-h-screen bg-neutral-50">
            <header className="sticky top-0 z-10 bg-white border-b px-4 py-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary-500" />
                <span className="font-semibold text-sm">앱 이름</span>
            </header>
            <main className="p-4 flex flex-col gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="rounded-lg bg-white border p-4">
                        <div className="h-3 w-2/3 rounded bg-neutral-200 mb-2" />
                        <div className="h-3 w-full rounded bg-neutral-100" />
                    </div>
                ))}
            </main>
        </Container>
    )
};
