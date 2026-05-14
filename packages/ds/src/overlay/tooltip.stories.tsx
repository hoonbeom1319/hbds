import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

const meta: Meta = {
    title: 'Overlay/Tooltip',
    tags: ['autodocs'],
    parameters: { layout: 'centered' }
};

export default meta;

const Btn = ({ children }: { children: React.ReactNode }) => (
    <button
        type="button"
        className="border-border hover:bg-neutral-100 inline-flex h-10 items-center rounded-md border bg-transparent px-4 text-sm font-medium"
    >
        {children}
    </button>
);

export const Default: StoryObj = {
    render: () => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Btn>호버해 보세요</Btn>
                </TooltipTrigger>
                <TooltipContent>아이템을 클립보드에 복사합니다</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
};

export const Sides: StoryObj = {
    render: () => (
        <TooltipProvider>
            <div className="grid grid-cols-2 gap-8">
                {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
                    <Tooltip key={side}>
                        <TooltipTrigger asChild>
                            <Btn>{side}</Btn>
                        </TooltipTrigger>
                        <TooltipContent side={side}>side = {side}</TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    )
};

export const DelayDuration: StoryObj = {
    render: () => (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Btn>지연 없이 (delayDuration=0)</Btn>
                </TooltipTrigger>
                <TooltipContent>즉시 표시</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
};
