# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run storybook        # Storybook dev server at localhost:6006
npm run build            # tsup build → dist/
npm run dev              # tsup watch mode
npm run typecheck        # tsc --noEmit (no build output)
npm publish --otp=<code> # Publish to npm (2FA required)
```

## Architecture

**Package:** `@hb-kit/ds` — single publishable npm package with subpath exports.

**Subpath entry points** (each maps `src/<name>/index.ts` → `dist/<name>/index.{js,cjs,d.ts}`):
- `@hb-kit/ds/primitives` — headless unstyled building blocks
- `@hb-kit/ds/display` — visual display components (badge, carousel, table, timeline, typography)
- `@hb-kit/ds/layout` — layout utilities (container)
- `@hb-kit/ds/overlay` — opinionated overlays built on primitives (Confirm, Slide)
- `@hb-kit/ds/surfaces` — card, accordion
- `@hb-kit/ds/lib/utils` — `cn` and `tw` helpers
- `@hb-kit/ds/tokens/default.css` — copied from `src/tokens/` at build time (not processed by tsup)

**Layer relationship:** `overlay/` and `surfaces/` compose from `primitives/`. They import via relative paths (`../../primitives`), not the package name.

**Design tokens** (`src/tokens/default.css`): Tailwind v4 `@theme` block that aliases semantic color names to Tailwind built-ins — `primary`→indigo, `secondary`→violet, `tertiary`→sky, `neutral`→slate, plus system (`info/success/warning/danger`) and semantic (`surface/border/muted`) tokens. Consumers must import this CSS file to use these color names in Tailwind classes.

**Confirm system** (`src/primitives/confirm/`): Promise-based imperative API. `store.ts` is a singleton using `useSyncExternalStore`. `useConfirm(selector)` reads store state. `confirm(name, data?)` returns `Promise<boolean>`. The store key (`name`) links the imperative call site to the `<Confirm name="...">` component in the tree. `ConfirmContent` children can be a render function receiving `data`.

**Storybook config** (`.storybook/`):
- `main.ts`: uses `@storybook/react-vite`, injects `@tailwindcss/vite` plugin via `viteFinal`. Must have `docs: { autodocs: 'tag' }` for autodocs pages to work.
- `preview.css`: `@import "tailwindcss"; @import "../src/tokens/default.css";` — required for Tailwind classes and design tokens to render in stories.
- Stories live in `src/**/*.stories.tsx` (co-located with components).

## TypeScript notes

- `noUncheckedIndexedAccess` is enabled — `record[key]` returns `T | undefined`. Always guard with optional chaining or explicit checks.
- `moduleResolution: Bundler` — no `.js` extension needed on imports.
- tsup handles the actual emit; `tsc` is only used for type checking (`noEmit: true`).
