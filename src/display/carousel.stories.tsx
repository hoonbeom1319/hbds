import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './carousel';

const meta: Meta = {
    title: 'Display/Carousel',
    tags: ['autodocs'],
    parameters: { layout: 'padded' }
};

export default meta;

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const Card = ({ label }: { label: string }) => (
    <div className="flex h-40 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-sm font-medium text-neutral-600">
        {label}
    </div>
);

const ArrowButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-sm shadow-sm disabled:opacity-30"
        {...props}
    />
);

export const Basic: StoryObj = {
    render: () => (
        <div className="w-full max-w-lg">
            <Carousel aria-label="기본 캐러셀">
                <CarouselContent>
                    {items.map((item) => (
                        <CarouselItem key={item} size="80%">
                            <Card label={item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
};

export const WithNavigation: StoryObj = {
    name: 'With Navigation Arrows',
    render: () => (
        <div className="w-full max-w-lg">
            <div className="relative">
                <Carousel aria-label="내비게이션 캐러셀">
                    <CarouselContent>
                        {items.map((item) => (
                            <CarouselItem key={item} size="80%">
                                <Card label={item} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="mt-3 flex justify-end gap-2">
                        <CarouselPrevious asChild>
                            <ArrowButton>←</ArrowButton>
                        </CarouselPrevious>
                        <CarouselNext asChild>
                            <ArrowButton>→</ArrowButton>
                        </CarouselNext>
                    </div>
                </Carousel>
            </div>
        </div>
    )
};

export const FullWidth: StoryObj = {
    name: 'Full Width Items',
    render: () => (
        <div className="w-full max-w-lg">
            <Carousel aria-label="풀 너비 캐러셀" spacing={0}>
                <CarouselContent>
                    {items.map((item) => (
                        <CarouselItem key={item} size="full">
                            <Card label={item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
};

export const AutoPlay: StoryObj = {
    name: 'AutoPlay',
    render: () => (
        <div className="w-full max-w-lg">
            <Carousel aria-label="자동 재생 캐러셀" autoPlay autoPlayOptions={{ delay: 2000 }} options={{ loop: true }}>
                <CarouselContent>
                    {items.map((item) => (
                        <CarouselItem key={item} size="80%">
                            <Card label={item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p className="mt-2 text-center text-xs text-neutral-400">2초마다 자동 전환 (loop)</p>
        </div>
    )
};

export const Spacing: StoryObj = {
    name: 'Spacing Variants',
    render: () => (
        <div className="flex flex-col gap-8">
            {([0.5, 1, 2] as const).map((spacing) => (
                <div key={spacing} className="w-full max-w-lg">
                    <p className="mb-2 text-xs text-neutral-400">spacing={spacing}rem</p>
                    <Carousel aria-label={`spacing ${spacing} 캐러셀`} spacing={spacing}>
                        <CarouselContent>
                            {items.slice(0, 3).map((item) => (
                                <CarouselItem key={item} size="40%">
                                    <Card label={item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            ))}
        </div>
    )
};
