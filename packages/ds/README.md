# @hb-kit/ds

Hoonbeom Design System을 위한 React UI 패키지입니다.  
접근성과 상호작용은 Radix 기반 primitives로 가져가고, 실제 제품 UI는 forms/overlay/feedback 같은 조합 컴포넌트로 구성하는 구조를 목표로 합니다.

## 이 패키지가 해결하려는 문제

- 앱 전반에서 반복되는 UI 패턴(폼, 오버레이, 피드백)을 일관된 API로 재사용
- 스타일 토큰(`tokens/*.css`)을 통해 테마/모션 규칙을 공통화
- headless 성격의 저수준 컴포넌트와 제품 친화적인 고수준 컴포넌트를 분리
- 서브패스 export로 필요한 레이어만 선택 import

## 설치

```bash
npm install @hb-kit/ds
```

Peer dependency:

- `react >= 19`
- `react-dom >= 19`

## 스타일 토큰 사용

앱 엔트리에서 토큰 CSS를 import하세요.

```css
@import "@hb-kit/ds/tokens/default.css";
```

필요하면 개별 파일도 import 가능합니다.

- `@hb-kit/ds/tokens/theme.css`
- `@hb-kit/ds/tokens/motions.css`

## 공개 API 구조

루트 엔트리(`@hb-kit/ds`)는 제공하지 않고, 도메인 단위 서브패스를 제공합니다.

- `@hb-kit/ds/primitives`
- `@hb-kit/ds/display`
- `@hb-kit/ds/layout`
- `@hb-kit/ds/overlay`
- `@hb-kit/ds/surfaces`
- `@hb-kit/ds/forms`
- `@hb-kit/ds/feedback`
- `@hb-kit/ds/lib/utils`

## 레이어 가이드

- `primitives`: Radix 기반 저수준 컴포넌트 및 headless에 가까운 베이스
- `forms`: 입력 계열 컴포넌트 + 필드 상태/접근성 조합 (`FormField`, `FormControl` 등)
- `overlay`: 확인 모달, 슬라이드, 툴팁 등 오버레이 UI 조합
- `feedback`: 토스트 등 사용자 피드백 컴포넌트
- `display`/`surfaces`/`layout`: 뷰 구성용 표현/레이아웃 컴포넌트

## 사용 예시

```tsx
import { FormControl, FormDescription, FormError, FormField, FormLabel, Input } from "@hb-kit/ds/forms";

export function EmailField() {
  return (
    <FormField invalid={false}>
      <FormLabel>이메일</FormLabel>
      <FormControl>
        <Input type="email" placeholder="you@example.com" />
      </FormControl>
      <FormDescription>로그인에 사용할 이메일을 입력하세요.</FormDescription>
      <FormError>이메일 형식이 올바르지 않습니다.</FormError>
    </FormField>
  );
}
```

## 로컬 개발

```bash
npm run storybook
npm run build
npm run typecheck
```

## 빌드/배포 메모

- 번들: `tsup` (ESM + CJS + DTS)
- CSS 토큰은 빌드 후 `dist/tokens`로 복사됩니다.
- `sideEffects`에 CSS를 명시해 번들러가 CSS import를 제거하지 않도록 합니다.

## 요구 사항

- Node.js `>= 22`

## License

MIT
