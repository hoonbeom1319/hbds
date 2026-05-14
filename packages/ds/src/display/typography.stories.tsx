import type { Meta, StoryObj } from '@storybook/react';
import { H1, H2, H3, H4, P, Lead, Muted, Code } from './typography';

const meta: Meta = {
    title: 'Display/Typography',
    tags: ['autodocs'],
    parameters: { layout: 'padded' }
};

export default meta;

export const Headings: StoryObj = {
    render: () => (
        <div className="flex flex-col gap-4">
            <H1>H1 — 디자인 시스템</H1>
            <H2>H2 — 컴포넌트 라이브러리</H2>
            <H3>H3 — 타이포그래피</H3>
            <H4>H4 — 텍스트 스타일</H4>
        </div>
    )
};

export const Body: StoryObj = {
    render: () => (
        <div className="flex max-w-prose flex-col gap-4">
            <Lead>리드 텍스트는 본문보다 크고 눈에 띄게 표시됩니다. 섹션의 요약이나 소개에 사용됩니다.</Lead>
            <P>본문 텍스트입니다. 일반적인 내용을 작성할 때 사용합니다. 줄 간격은 넉넉하게 설정되어 가독성을 높입니다.</P>
            <Muted>뮤트 텍스트는 보조 정보나 힌트를 표시할 때 사용합니다. 상대적으로 덜 강조됩니다.</Muted>
        </div>
    )
};

export const InlineCode: StoryObj = {
    name: 'Inline Code',
    render: () => (
        <P>
            컴포넌트를 사용하려면 <Code>import {'{ Button }'} from 'hb-ds/primitives'</Code>와 같이 임포트합니다.
        </P>
    )
};

export const AllInOne: StoryObj = {
    name: 'All Together',
    render: () => (
        <article className="max-w-prose">
            <H1>디자인 시스템 소개</H1>
            <Lead className="mt-3">
                hb-ds는 React 기반의 헤드리스 디자인 시스템으로, Tailwind CSS v4와 함께 사용합니다.
            </Lead>
            <H2 className="mt-8">시작하기</H2>
            <P className="mt-3">
                패키지를 설치하고 바로 사용할 수 있습니다. 별도의 CSS 설정 없이 Tailwind가 자동으로 클래스를 스캔합니다.
            </P>
            <H3 className="mt-6">설치</H3>
            <Code className="mt-2 block py-2">npm i hb-ds</Code>
            <H4 className="mt-6">토큰 임포트</H4>
            <P className="mt-2">
                디자인 토큰을 사용하려면 CSS 파일에서 임포트하세요.
            </P>
            <Muted className="mt-2">토큰은 Tailwind v4의 @theme 기반으로 정의되어 있습니다.</Muted>
        </article>
    )
};
