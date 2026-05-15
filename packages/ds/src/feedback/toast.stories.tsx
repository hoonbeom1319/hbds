import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './toast';
import { Button } from '../display/button';

const meta: Meta = {
    title: 'Feedback/Toast',
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
    decorators: [
        (Story) => (
            <div className="flex min-h-screen items-center justify-center p-8">
                <Story />
            </div>
        )
    ]
};

export default meta;

export const Default: StoryObj = {
    render: () => {
        const Demo = () => {
            const [open, setOpen] = useState(false);
            return (
                <ToastProvider>
                    <Button variant="outline" onClick={() => setOpen(true)}>
                        토스트 띄우기
                    </Button>
                    <Toast open={open} onOpenChange={setOpen}>
                        <div className="flex flex-col gap-1">
                            <ToastTitle>저장 완료</ToastTitle>
                            <ToastDescription>변경사항이 저장되었습니다.</ToastDescription>
                        </div>
                        <ToastClose />
                    </Toast>
                    <ToastViewport />
                </ToastProvider>
            );
        };
        return <Demo />;
    }
};

export const WithAction: StoryObj = {
    render: () => {
        const Demo = () => {
            const [open, setOpen] = useState(false);
            return (
                <ToastProvider>
                    <Button variant="outline" onClick={() => setOpen(true)}>
                        되돌리기 가능 토스트
                    </Button>
                    <Toast open={open} onOpenChange={setOpen}>
                        <div className="flex flex-col gap-1">
                            <ToastTitle>메일 삭제됨</ToastTitle>
                            <ToastDescription>대화함에서 1개의 메일이 삭제되었습니다.</ToastDescription>
                        </div>
                        <ToastAction altText="되돌리기" onClick={() => setOpen(false)}>
                            되돌리기
                        </ToastAction>
                        <ToastClose />
                    </Toast>
                    <ToastViewport />
                </ToastProvider>
            );
        };
        return <Demo />;
    }
};

export const Variants: StoryObj = {
    render: () => {
        const Demo = () => {
            const [open, setOpen] = useState<'success' | 'warning' | 'danger' | null>(null);
            return (
                <ToastProvider>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={() => setOpen('success')}>
                            성공
                        </Button>
                        <Button variant="outline" onClick={() => setOpen('warning')}>
                            경고
                        </Button>
                        <Button variant="outline" onClick={() => setOpen('danger')}>
                            오류
                        </Button>
                    </div>
                    <Toast variant="success" open={open === 'success'} onOpenChange={(v) => !v && setOpen(null)}>
                        <ToastTitle>저장이 완료되었습니다.</ToastTitle>
                        <ToastClose />
                    </Toast>
                    <Toast variant="warning" open={open === 'warning'} onOpenChange={(v) => !v && setOpen(null)}>
                        <ToastTitle>저장 공간이 부족합니다.</ToastTitle>
                        <ToastClose />
                    </Toast>
                    <Toast variant="danger" open={open === 'danger'} onOpenChange={(v) => !v && setOpen(null)}>
                        <ToastTitle>저장에 실패했습니다.</ToastTitle>
                        <ToastClose />
                    </Toast>
                    <ToastViewport />
                </ToastProvider>
            );
        };
        return <Demo />;
    }
};
let nextId = 0;
export const Multiple: StoryObj = {
    render: () => {
        const Demo = () => {
            const [toasts, setToasts] = useState<Array<{ id: number; message: string }>>([]);

            const addToast = () => {
                nextId++;
                setToasts((prev) => [...prev, { id: nextId, message: `알림 #${nextId}` }]);
            };
            return (
                <ToastProvider>
                    <Button variant="outline" onClick={addToast}>
                        토스트 추가ㅇ
                    </Button>
                    {toasts.map((t) => (
                        <Toast key={t.id} open onOpenChange={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))}>
                            <ToastTitle>{t.message}</ToastTitle>
                            <ToastClose />
                        </Toast>
                    ))}
                    <ToastViewport />
                </ToastProvider>
            );
        };
        return <Demo />;
    }
};
