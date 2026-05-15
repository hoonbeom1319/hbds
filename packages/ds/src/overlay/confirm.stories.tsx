import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import * as ConfirmPrimitive from '../primitives/confirm/use-confirm';
import { Confirm, ConfirmTitle, ConfirmBody, ConfirmButtonGroup, ConfirmButton, CancelButton } from './confirm';
import { Button } from '../display/button';

const meta: Meta = {
    title: 'Overlay/Confirm',
    tags: ['autodocs'],
    parameters: { layout: 'padded' }
};

export default meta;

export const Basic: StoryObj = {
    render: () => {
        const Demo = () => {
            const confirm = ConfirmPrimitive.useConfirm((s) => s.confirm);
            const close = ConfirmPrimitive.useConfirm((s) => s.close);
            const [result, setResult] = useState<string | null>(null);

            const handleClick = async () => {
                const ok = await confirm('basic-demo');
                setResult(ok ? '확인 선택' : '취소 선택');
                close('basic-demo');
            };

            return (
                <div className="flex flex-col items-start gap-4">
                    <Button variant="danger" onClick={handleClick}>
                        삭제 확인 열기
                    </Button>
                    {result && (
                        <p className="text-sm text-neutral-600">
                            결과: <strong>{result}</strong>
                        </p>
                    )}
                    <Confirm name="basic-demo">
                        <ConfirmTitle>삭제하시겠습니까?</ConfirmTitle>
                        <ConfirmBody>이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</ConfirmBody>
                        <ConfirmButtonGroup>
                            <CancelButton asChild name="basic-demo">
                                <Button variant="outline">취소</Button>
                            </CancelButton>
                            <ConfirmButton asChild name="basic-demo">
                                <Button variant="danger">삭제</Button>
                            </ConfirmButton>
                        </ConfirmButtonGroup>
                    </Confirm>
                </div>
            );
        };
        return <Demo />;
    }
};

export const WithData: StoryObj = {
    name: 'With Data (데이터 전달)',
    render: () => {
        const Demo = () => {
            const confirm = ConfirmPrimitive.useConfirm((s) => s.confirm);
            const close = ConfirmPrimitive.useConfirm((s) => s.close);
            const [result, setResult] = useState<string | null>(null);

            const handleClick = async (name: string) => {
                const ok = await confirm('data-demo', { itemName: name });
                await new Promise((resolve) => setTimeout(resolve, 500));
                setResult(ok ? `"${name}" 삭제 완료` : '취소됨');
                close('data-demo');
            };

            return (
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                        {['보고서 A', '보고서 B', '보고서 C'].map((name) => (
                            <Button key={name} variant="danger" size="sm" onClick={() => handleClick(name)}>
                                {name} 삭제
                            </Button>
                        ))}
                    </div>
                    {result && (
                        <p className="text-sm text-neutral-600">
                            결과: <strong>{result}</strong>
                        </p>
                    )}
                    <Confirm name="data-demo">
                        {(data) => {
                            const { itemName } = data as { itemName: string };
                            return (
                                <>
                                    <ConfirmTitle>"{itemName}" 삭제</ConfirmTitle>
                                    <ConfirmBody>선택한 항목을 삭제합니다. 이 작업은 되돌릴 수 없습니다.</ConfirmBody>
                                    <ConfirmButtonGroup>
                                        <CancelButton asChild name="data-demo">
                                            <Button variant="outline">취소</Button>
                                        </CancelButton>
                                        <ConfirmButton asChild name="data-demo">
                                            <Button variant="danger">삭제</Button>
                                        </ConfirmButton>
                                    </ConfirmButtonGroup>
                                </>
                            );
                        }}
                    </Confirm>
                </div>
            );
        };
        return <Demo />;
    }
};

export const HiddenTitle: StoryObj = {
    name: 'Hidden Title',
    render: () => {
        const Demo = () => {
            const confirm = ConfirmPrimitive.useConfirm((s) => s.confirm);
            const close = ConfirmPrimitive.useConfirm((s) => s.close);
            const [result, setResult] = useState<string | null>(null);

            const handleClick = async () => {
                const ok = await confirm('hidden-title-demo');
                await new Promise((resolve) => setTimeout(resolve, 500));
                setResult(ok ? '로그아웃 진행' : '로그아웃 취소');
                close('hidden-title-demo');
            };

            return (
                <div className="flex flex-col items-start gap-4">
                    <Button variant="outline" onClick={handleClick}>
                        열기
                    </Button>
                    {result && (
                        <p className="text-sm text-neutral-600">
                            결과: <strong>{result}</strong>
                        </p>
                    )}
                    <Confirm name="hidden-title-demo">
                        <ConfirmTitle hidden hideClose>
                            숨겨진 제목 (접근성용)
                        </ConfirmTitle>
                        <ConfirmBody>
                            <p className="mb-1 text-sm font-medium text-neutral-900">정말 로그아웃 하시겠어요?</p>
                            <p className="text-xs text-neutral-500">현재 작업 중인 내용은 저장되지 않습니다.</p>
                        </ConfirmBody>
                        <ConfirmButtonGroup>
                            <CancelButton asChild name="hidden-title-demo">
                                <Button variant="outline">머물기</Button>
                            </CancelButton>
                            <ConfirmButton asChild name="hidden-title-demo">
                                <Button>로그아웃</Button>
                            </ConfirmButton>
                        </ConfirmButtonGroup>
                    </Confirm>
                </div>
            );
        };
        return <Demo />;
    }
};
