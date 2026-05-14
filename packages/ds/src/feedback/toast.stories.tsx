import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './toast';

const meta: Meta = {
    title: 'Feedback/Toast',
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;

const Trigger = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <button
        type="button"
        onClick={onClick}
        className="border-border hover:bg-neutral-100 inline-flex h-10 items-center rounded-md border bg-transparent px-4 text-sm font-medium"
    >
        {children}
    </button>
);

export const Default: StoryObj = {
    render: () => {
        const Demo = () => {
            const [open, setOpen] = useState(false);
            return (
                <ToastProvider>
                    <Trigger onClick={() => setOpen(true)}>토스트 띄우기</Trigger>
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
                    <Trigger onClick={() => setOpen(true)}>되돌리기 가능 토스트</Trigger>
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
                        <Trigger onClick={() => setOpen('success')}>성공</Trigger>
                        <Trigger onClick={() => setOpen('warning')}>경고</Trigger>
                        <Trigger onClick={() => setOpen('danger')}>오류</Trigger>
                    </div>
                    <Toast variant="success" open={open === 'success'} onOpenChange={(v) => !v && setOpen(null)}>
                        <ToastTitle>성공</ToastTitle>
                        <ToastClose />
                    </Toast>
                    <Toast variant="warning" open={open === 'warning'} onOpenChange={(v) => !v && setOpen(null)}>
                        <ToastTitle>경고</ToastTitle>
                        <ToastClose />
                    </Toast>
                    <Toast variant="danger" open={open === 'danger'} onOpenChange={(v) => !v && setOpen(null)}>
                        <ToastTitle>오류</ToastTitle>
                        <ToastClose />
                    </Toast>
                    <ToastViewport />
                </ToastProvider>
            );
        };
        return <Demo />;
    }
};
