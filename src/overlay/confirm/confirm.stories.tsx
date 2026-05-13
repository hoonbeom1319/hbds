import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { useConfirm } from '../../primitives/confirm/use-confirm';
import { Confirm, ConfirmTitle, ConfirmBody, ConfirmButtonGroup, ConfirmButton, CancelButton } from './confirm';

const meta: Meta = {
    title: 'Overlay/Confirm',
    tags: ['autodocs'],
    parameters: { layout: 'padded' }
};

export default meta;

export const Basic: StoryObj = {
    render: () => {
        const confirm = useConfirm((s) => s.confirm);
        const [result, setResult] = useState<string | null>(null);

        const handleClick = async () => {
            const ok = await confirm('basic-demo');
            setResult(ok ? '확인 선택' : '취소 선택');
        };

        return (
            <div className="flex flex-col items-start gap-4">
                <button
                    onClick={handleClick}
                    className="rounded bg-primary-500 px-4 py-2 text-sm text-white"
                >
                    삭제 확인 열기
                </button>
                {result && <p className="text-sm text-neutral-600">결과: <strong>{result}</strong></p>}

                <Confirm name="basic-demo">
                    <ConfirmTitle>삭제하시겠습니까?</ConfirmTitle>
                    <ConfirmBody>이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?</ConfirmBody>
                    <ConfirmButtonGroup>
                        <CancelButton name="basic-demo" className="rounded border px-4 py-2 text-sm">
                            취소
                        </CancelButton>
                        <ConfirmButton name="basic-demo" className="rounded bg-danger px-4 py-2 text-sm text-white">
                            삭제
                        </ConfirmButton>
                    </ConfirmButtonGroup>
                </Confirm>
            </div>
        );
    }
};

export const WithData: StoryObj = {
    name: 'With Data (데이터 전달)',
    render: () => {
        const confirm = useConfirm((s) => s.confirm);
        const nodeData = useConfirm((s) => s.node['data-demo']);
        const [result, setResult] = useState<string | null>(null);

        const itemName = (nodeData?.data as { itemName: string } | undefined)?.itemName ?? '';

        const handleClick = async (name: string) => {
            const ok = await confirm('data-demo', { itemName: name });
            setResult(ok ? `"${name}" 삭제 완료` : '취소됨');
        };

        return (
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {['보고서 A', '보고서 B', '보고서 C'].map((name) => (
                        <button
                            key={name}
                            onClick={() => handleClick(name)}
                            className="rounded border px-3 py-1.5 text-sm text-danger"
                        >
                            {name} 삭제
                        </button>
                    ))}
                </div>
                {result && <p className="text-sm text-neutral-600">결과: <strong>{result}</strong></p>}

                <Confirm name="data-demo">
                    <ConfirmTitle>"{itemName}" 삭제</ConfirmTitle>
                    <ConfirmBody>선택한 항목을 삭제합니다. 이 작업은 되돌릴 수 없습니다.</ConfirmBody>
                    <ConfirmButtonGroup>
                        <CancelButton name="data-demo" className="rounded border px-4 py-2 text-sm">취소</CancelButton>
                        <ConfirmButton name="data-demo" className="rounded bg-danger px-4 py-2 text-sm text-white">삭제</ConfirmButton>
                    </ConfirmButtonGroup>
                </Confirm>
            </div>
        );
    }
};

export const HiddenTitle: StoryObj = {
    name: 'Hidden Title',
    render: () => {
        const confirm = useConfirm((s) => s.confirm);

        return (
            <div>
                <button
                    onClick={() => confirm('hidden-title-demo')}
                    className="rounded bg-primary-500 px-4 py-2 text-sm text-white"
                >
                    열기
                </button>

                <Confirm name="hidden-title-demo">
                    <ConfirmTitle hidden hideClose>숨겨진 제목 (접근성용)</ConfirmTitle>
                    <ConfirmBody>
                        <p className="text-sm font-medium text-neutral-900 mb-1">정말 로그아웃 하시겠어요?</p>
                        <p className="text-xs text-neutral-500">현재 작업 중인 내용은 저장되지 않습니다.</p>
                    </ConfirmBody>
                    <ConfirmButtonGroup>
                        <CancelButton name="hidden-title-demo" className="flex-1 rounded border px-4 py-2 text-sm">머물기</CancelButton>
                        <ConfirmButton name="hidden-title-demo" className="flex-1 rounded bg-primary-500 px-4 py-2 text-sm text-white">로그아웃</ConfirmButton>
                    </ConfirmButtonGroup>
                </Confirm>
            </div>
        );
    }
};
