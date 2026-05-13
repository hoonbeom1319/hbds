# hbds 디자인시스템 셋업 컨텍스트

## 프로젝트 개요
- **이름**: hbds (Hoonbeom Design System)
- **패키지명**: `@hb-ds` (npm scoped, public)
- **레포**: https://github.com/hoonbeom1319/hbds
- **목적**: MFA 구조에서 A/B 프로젝트가 공통으로 쓸 디자인시스템

## 기술 스택
- React 18 & 19 모두 지원 (`peerDependencies: ">=18"`)
- TailwindCSS v4
- TypeScript
- Node 22+
- tsup (번들러)
- Storybook 8 (문서화 + 개발환경)

## 아키텍처
```
Primitive (무스타일 + 접근성 + 동작)
  └── Display / Layout / Overlay / Surfaces (스타일링)
```

- **Primitive**: 무스타일, 접근성(aria, role, keyboard) 책임, 동작 로직 (shadcn의 Radix 레이어 역할)
- **카테고리 레이어**: Primitive를 조합 + Tailwind 스타일링 + CSS 변수로 토큰화

## 폴더 구조 (npm workspaces 모노레포)
```
hbds/
├── package.json          # workspace root (private)
├── tsconfig.json         # 공통 base tsconfig
├── .storybook/
└── packages/
    ├── utils/            # @hb-ds/utils  — cn, tw 유틸
    ├── tokens/           # @hb-ds/tokens — default.css
    ├── primitives/       # @hb-ds/primitives
    ├── display/          # @hb-ds/display
    ├── layout/           # @hb-ds/layout
    ├── overlay/          # @hb-ds/overlay
    └── surfaces/         # @hb-ds/surfaces
```

## Export 전략
카테고리별 별도 npm 패키지:
```ts
import { Button } from '@hb-ds/primitives';
import { Carousel } from '@hb-ds/display';
import '@hb-ds/tokens/default.css';
```

## Import 경로
- 같은 패키지 내: **상대경로** (`./button`, `../confirm`)
- 다른 패키지: **패키지명** (`@hb-ds/primitives`, `@hb-ds/utils`)

## Tailwind v4 배포 전략
- hbds는 Tailwind CSS를 번들링하지 않음
- 컴포넌트의 className은 그대로 둠
- 사용처 Tailwind가 `@source`로 hbds 파일을 스캔해서 CSS 생성
- 토큰 CSS만 별도 export → 사용처가 `@import`

## 디자인 토큰 (Tailwind v4 @theme 기반)
### 팔레트 (시맨틱 → Tailwind 기본 팔레트 참조)
- `--color-primary-{50~950}` → indigo (기본값)
- `--color-secondary-{50~950}` → violet
- `--color-tertiary-{50~950}` → sky
- `--color-neutral-{50~950}` → slate

### System
- `--color-info` → sky-500
- `--color-success` → emerald-500
- `--color-warning` → amber-500
- `--color-danger` → rose-500 (error 안 쓰고 danger만 사용)

### Semantic
- `--color-surface`, `--color-surface-foreground`
- `--color-border`, `--color-muted`

## 기존 자산
- 일부 컴포넌트가 다른 프로젝트의 `src/hbds/` 폴더에 있음 (이관 필요)
- Primitive 예시: button (asChild 패턴), carousel (embla 기반)
- Display 예시: carousel (autoPlay, spacing prop 추상화, CSS 변수로 spacing 관리)

## 셋업 완료된 것
- npm workspaces 모노레포 구성
- 7개 패키지 전부 빌드 성공 (ESM + CJS + DTS)
- Storybook 8 + Tailwind v4 연동 (viteFinal alias로 소스 직접 참조)
- `.storybook/main.ts`, `preview.ts`, `preview.css`

## 다음 할 일
1. 로컬에서 실제 프로젝트와 연동 테스트 (`npm link` 또는 파일 경로 install)
2. 각 컴포넌트 Stories 파일 작성 (`*.stories.tsx`)
3. Storybook 실행 확인 (`npm run storybook`)
4. npm publish (패키지별 개별 publish)

## 배포 방식
- npm public 배포
- 버전 관리: Changesets 도입