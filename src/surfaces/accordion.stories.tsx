import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from './accordion';

const meta: Meta = {
    title: 'Surfaces/Accordion',
    tags: ['autodocs'],
    parameters: { layout: 'padded' }
};

export default meta;

const faqItems = [
    { value: 'q1', question: '배송은 얼마나 걸리나요?', answer: '주문 확인 후 영업일 기준 1~3일 내에 출고되며, 출고 후 1~2일 내에 도착합니다.' },
    { value: 'q2', question: '반품 및 교환 정책은 어떻게 되나요?', answer: '상품 수령 후 7일 이내에 반품 또는 교환 신청이 가능합니다. 단, 사용 흔적이 있거나 포장이 훼손된 경우에는 불가합니다.' },
    { value: 'q3', question: '해외 배송이 가능한가요?', answer: '현재 국내 배송만 지원하고 있습니다. 해외 배송은 추후 지원 예정입니다.' }
];

export const Single: StoryObj = {
    name: 'Single (하나만 열림)',
    render: () => (
        <Accordion type="single" collapsible className="max-w-md w-full divide-y rounded-lg border">
            {faqItems.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionHeader>
                        <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-left">
                            {item.question}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className="px-4 pb-4 text-sm text-neutral-600">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
};

export const Multiple: StoryObj = {
    name: 'Multiple (여러 개 열림)',
    render: () => (
        <Accordion type="multiple" className="max-w-md w-full divide-y rounded-lg border">
            {faqItems.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionHeader>
                        <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-left">
                            {item.question}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className="px-4 pb-4 text-sm text-neutral-600">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
};

export const DefaultOpen: StoryObj = {
    name: 'Default Open',
    render: () => (
        <Accordion type="single" defaultValue="q1" collapsible className="max-w-md w-full divide-y rounded-lg border">
            {faqItems.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionHeader>
                        <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-left">
                            {item.question}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className="px-4 pb-4 text-sm text-neutral-600">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
};
