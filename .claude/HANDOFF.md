# Session Handoff — `@hb-kit/ds` 확장

이 문서는 세션이 끊겨도 다음 세션에서 작업을 이어갈 수 있도록 핵심 컨텍스트를 정리한 메모입니다. 작업이 마무리되면 삭제하거나 새로 갈음하세요.

## 현재 상태 (마지막 갱신: 2026-05-14)

`packages/ds`에 폼/피드백/툴팁 컴포넌트군을 1차 추가 완료. **타입체크·tsup 빌드(ESM/CJS/DTS) 전부 통과**한 상태.

### 이번 세션에 추가된 것

| 컴포넌트 | Radix 패키지 | primitive 파일 | 스타일 래퍼 |
|---|---|---|---|
| Input | (네이티브) | — | `src/forms/input.tsx` |
| Textarea | (네이티브) | — | `src/forms/textarea.tsx` |
| Label | `react-label` | `src/primitives/label.tsx` | `src/forms/label.tsx` |
| FormField (Label/Control/Description/Error 조합) | (조합) | — | `src/forms/field.tsx` |
| Checkbox | `react-checkbox` | `src/primitives/checkbox.tsx` | `src/forms/checkbox.tsx` |
| RadioGroup | `react-radio-group` | `src/primitives/radio-group.tsx` | `src/forms/radio-group.tsx` |
| Switch | `react-switch` | `src/primitives/switch.tsx` | `src/forms/switch.tsx` |
| Select | `react-select` | `src/primitives/select.tsx` | `src/forms/select.tsx` |
| Toast | `react-toast` | `src/primitives/toast.tsx` | `src/feedback/toast.tsx` |
| Tooltip | `react-tooltip` | `src/primitives/tooltip.tsx` | `src/overlay/tooltip.tsx` |

새 엔트리 두 개를 추가:
- `@hb-kit/ds/forms` — `src/forms/index.ts`
- `@hb-kit/ds/feedback` — `src/feedback/index.ts`

각각 `packages/ds/package.json` exports와 `tsup.config.ts` entry에 등록되어 있음.

각 컴포넌트에 Storybook 스토리(Default + 상태/변형) 포함.

## 작업 원칙 (사용자 명시)

1. **원천은 무조건 Radix UI 우선.** Radix에 있는 컴포넌트는 반드시 Radix 기반으로 만든다. 없는 경우(Input, Textarea)만 네이티브 HTML 사용.
2. **2-레이어 아키텍처를 유지한다.**
   - `src/primitives/*` — Radix 원본 얇은 재노출 (스타일 없음, 기존 `dialog.tsx`/`tabs.tsx` 패턴)
   - `src/{forms,feedback,overlay,surfaces,display,layout}/*` — `cn()`으로 기본 Tailwind 스타일 입힌 래퍼
3. **디자인 토큰을 우선 사용한다.** 필요한 토큰은 그때그때 추가해서 사용.
   - 현재 정의된 토큰: `src/tokens/theme.css` (primary/secondary/tertiary/neutral 색상 스케일, surface/border/muted 시맨틱, info/success/warning/danger 시스템 컬러)
   - 추가가 필요해 보였지만 아직 정의되지 않은 것: `--z-*` (현재 컴포넌트들이 `z-dropdown`, `z-tooltip`, `z-toast`, `z-backdrop`, `z-modal` 등을 사용 중인데 토큰 정의가 누락됨)
4. **`cn()` 유틸 사용** — `src/lib/utils.ts`의 `cn`/`tw` 사용.

## 다음 작업 후보 (사용자 추천 순)

### 1순위 — 시급한 디자인 토큰 보강
- `src/tokens/theme.css`에 z-index 스케일 토큰 추가 필요:
  - `--z-dropdown`, `--z-tooltip`, `--z-toast`, `--z-backdrop`, `--z-modal`
- (현재 코드가 이 클래스명을 참조하는데 토큰이 없어서 Tailwind v4가 빈 값으로 처리 중일 수 있음 — 확인 필요)

### 2순위 — 컴포넌트 확장

| 카테고리 | 컴포넌트 | Radix 패키지 (확인됨) |
|---|---|---|
| feedback | Alert | 없음 (네이티브) |
| feedback | Skeleton | 없음 (네이티브) |
| feedback | Spinner | 없음 (네이티브) |
| feedback | Progress | `@radix-ui/react-progress` |
| overlay/menu | DropdownMenu | `@radix-ui/react-dropdown-menu` |
| overlay | Popover | `@radix-ui/react-popover` |
| navigation | NavigationMenu | `@radix-ui/react-navigation-menu` |
| navigation | Breadcrumb | 없음 (네이티브) |
| navigation | Pagination | 없음 (네이티브) |
| display | Avatar | `@radix-ui/react-avatar` |
| layout | Separator | `@radix-ui/react-separator` |
| layout | ScrollArea | `@radix-ui/react-scroll-area` |
| layout | AspectRatio | `@radix-ui/react-aspect-ratio` |
| forms | Slider | `@radix-ui/react-slider` |
| forms | Toggle / ToggleGroup | `@radix-ui/react-toggle`, `@radix-ui/react-toggle-group` |
| display | Tag/Chip | 없음 (Badge 변형) |

### 3순위 — 기존 컴포넌트 정비
- `Badge`/`Button` 등 기존 컴포넌트도 variant 시스템(`size`, `variant`) 추가 검토 — 현재 너무 얇음.

## 환경 메모 (재현용)

- **Node.js**: pnpm 11.1.1이 Node 22.13+를 요구. 시스템 기본 node는 v20.12.0이라 그대로 실행하면 `ERR_UNKNOWN_BUILTIN_MODULE: node:sqlite` 에러로 죽음.
  - 해결: `export PATH="$HOME/.nvm/versions/node/v22.16.0/bin:$PATH"` 후 pnpm 명령 실행.
  - 새 세션마다 이 환경변수 export 필요 (셸 init에 자동 적용 안 됨).
- **빌드 확인**: `pnpm --filter @hb-kit/ds typecheck` + `pnpm --filter @hb-kit/ds build` 둘 다 통과해야 OK.
- **Tailwind**: v4. `@theme {}` 블록에서 CSS 변수로 토큰 정의 (`src/tokens/theme.css`).

## 미커밋 상태 (다음 세션 시작 시점)

이번 세션 종료 시점에 다음 변경이 워킹 트리에 남아 있음 (커밋 권장):

```
 D CLAUDE.md                                    # 이전 세션에서 삭제됨
 M packages/ds/package.json                     # exports + Radix deps 추가
 M packages/ds/src/overlay/index.ts             # tooltip export 추가
 M packages/ds/src/primitives/index.ts          # label/checkbox/.../tooltip export 추가
 M packages/ds/tsup.config.ts                   # forms/feedback entry 추가
 M pnpm-lock.yaml
?? packages/ds/src/feedback/                    # toast + stories + index
?? packages/ds/src/forms/                       # 9개 폼 컴포넌트 + stories + index
?? packages/ds/src/overlay/tooltip.tsx
?? packages/ds/src/overlay/tooltip.stories.tsx
?? packages/ds/src/primitives/{checkbox,label,radio-group,select,switch,toast,tooltip}.tsx
?? packages/hooks/                              # 별개 작업
?? packages/utils/                              # 별개 작업
```

## 다음 세션 시작 시 추천 워크플로

1. 이 문서를 먼저 읽고 컨텍스트 복원.
2. `git status`로 워킹 트리 상태 확인.
3. 사용자에게 "토큰 보강(z-index)부터 갈까요, 컴포넌트 추가부터 갈까요?" 물어보고 진행.
4. 작업 중 디자인 토큰이 필요하면 `src/tokens/theme.css`에 즉시 추가.
5. 마무리 시 `pnpm --filter @hb-kit/ds typecheck && pnpm --filter @hb-kit/ds build`로 검증.
