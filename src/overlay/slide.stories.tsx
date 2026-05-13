import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Slide } from './slide';

const meta: Meta = {
    title: 'Overlay/Slide',
    tags: ['autodocs'],
    parameters: { layout: 'padded' }
};

export default meta;

export const FromBottom: StoryObj = {
    name: 'From Bottom (기본)',
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <div className="relative h-64 overflow-hidden rounded-lg border bg-neutral-50">
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="bg-primary-500 absolute top-4 left-1/2 -translate-x-1/2 rounded px-4 py-2 text-sm text-white"
                >
                    {open ? '닫기' : '열기'}
                </button>
                <Slide open={open} direction="down" className="absolute bottom-0 w-full rounded-t-xl bg-white p-4 shadow-lg">
                    <p className="text-sm font-medium text-neutral-800">아래에서 올라오는 패널</p>
                    <p className="mt-1 text-xs text-neutral-500">direction="down" — 닫힐 때 아래로 사라집니다.</p>
                </Slide>
            </div>
        );
    }
};

export const FromLeft: StoryObj = {
    name: 'From Left (사이드 드로어)',
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <div className="relative h-64 overflow-hidden rounded-lg border bg-neutral-50">
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="bg-primary-500 absolute top-4 left-1/2 -translate-x-1/2 rounded px-4 py-2 text-sm text-white"
                >
                    {open ? '닫기' : '열기'}
                </button>
                <Slide open={open} direction="left" keepMounted className="absolute inset-y-0 left-0 w-48 bg-white p-4 shadow-lg">
                    <p className="text-sm font-medium text-neutral-800">사이드 메뉴</p>
                    <ul className="mt-3 flex flex-col gap-2 text-sm text-neutral-600">
                        <li>홈</li>
                        <li>프로필</li>
                        <li>설정</li>
                    </ul>
                </Slide>
            </div>
        );
    }
};

export const Directions: StoryObj = {
    name: 'All Directions',
    render: () => {
        const [active, setActive] = useState<'up' | 'down' | 'left' | 'right' | null>(null);
        const directions = ['up', 'down', 'left', 'right'] as const;
        return (
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {directions.map((d) => (
                        <button
                            key={d}
                            onClick={() => setActive((prev) => (prev === d ? null : d))}
                            className={`rounded px-3 py-1.5 text-sm ${active === d ? 'bg-primary-500 text-white' : 'border text-neutral-700'}`}
                        >
                            {d}
                        </button>
                    ))}
                </div>
                <div className="relative h-32 overflow-hidden rounded-lg border bg-neutral-50">
                    {directions.map((d) => (
                        <Slide
                            key={d}
                            open={active === d}
                            direction={d}
                            keepMounted
                            className={`bg-primary-100 text-primary-700 absolute flex items-center justify-center text-sm font-medium ${
                                d === 'up' || d === 'down' ? 'inset-x-0 h-16' : 'inset-y-0 w-32'
                            } ${d === 'down' ? 'bottom-0' : d === 'up' ? 'top-0' : d === 'right' ? 'right-0' : 'left-0'}`}
                        >
                            {d}
                        </Slide>
                    ))}
                </div>
            </div>
        );
    }
};

export const SlowTransition: StoryObj = {
    name: 'Custom Timeout',
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <div className="relative h-48 overflow-hidden rounded-lg border bg-neutral-50">
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="bg-primary-500 absolute top-4 left-1/2 -translate-x-1/2 rounded px-4 py-2 text-sm text-white"
                >
                    {open ? '닫기' : '열기'}
                </button>
                <Slide open={open} direction="down" timeout={600} className="absolute bottom-0 w-full rounded-t-xl bg-white p-4 shadow-lg">
                    <p className="text-sm text-neutral-700">timeout=600ms — 느린 전환</p>
                </Slide>
            </div>
        );
    }
};
