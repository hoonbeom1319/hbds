# hb-kit

pnpm monorepo. Active package: `@hb-kit/ds`. `packages/hooks` and `packages/utils` are empty stubs.

## Commands

```sh
# Run from root
pnpm build                              # build all packages
pnpm lint                               # lint all packages
pnpm test                               # test all packages
pnpm typecheck                          # typecheck all packages

# Run for ds package only
pnpm --filter @hb-kit/ds dev           # tsup watch
pnpm --filter @hb-kit/ds storybook     # Storybook on :6006
pnpm --filter @hb-kit/ds typecheck     # tsc --noEmit
pnpm --filter @hb-kit/ds lint          # ESLint
pnpm --filter @hb-kit/ds test          # Vitest (run once)
pnpm --filter @hb-kit/ds test:watch    # Vitest (watch)
pnpm --filter @hb-kit/ds build         # tsup production build
```

## Architecture: @hb-kit/ds

Two-layer design system. React 19 + Radix UI + TailwindCSS v4.

**Layer 1 — Primitives** (`src/primitives/`): thin, unstyled Radix UI wrappers. No `cn()` or Tailwind classes here.

**Layer 2 — Styled components**: built on primitives, apply design tokens via `cn()`.
- `src/forms/` — Input, Textarea, Checkbox, RadioGroup, Select, Switch, Label, FormField
- `src/display/` — Badge, Carousel, Table, Timeline, Typography
- `src/overlay/` — Confirm, Slide, Tooltip
- `src/surfaces/` — Accordion, Card
- `src/layout/` — Container
- `src/feedback/` — Toast

## Token System

```
src/tokens/
  default.css   # @import theme.css + motions.css  (this is what consumers import)
  theme.css     # @theme { --color-*, --z-* }
  motions.css   # @theme { --animate-* } + @keyframes
```

TailwindCSS v4 reads `@theme` blocks and generates utilities automatically:
- `--color-primary-500` → `text-primary-500`, `bg-primary-500`, etc.
- `--z-modal` → `z-modal`

Z-index scale: `dropdown(1000) sticky(1020) fixed(1030) backdrop(1040) modal(1050) popover(1060) tooltip(1070) toast(1080)`

## Conventions

- Style via `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)
- All components use React 19 ref props (no `forwardRef`)
- Storybook story required for every styled component
- `FormField` context (`src/forms/field.tsx`) wires label/control/description/error via `id`

## Adding a Component

1. If Radix-based: add primitive to `src/primitives/` and export from `src/primitives/index.ts`
2. Add styled component to appropriate layer directory
3. Export from that layer's `index.ts`
4. Add `component.stories.tsx` with at least a Default story

## Build & Release

```sh
pnpm changeset          # describe changes (runs changeset wizard)
pnpm version-packages   # bump versions per changeset
pnpm release            # pnpm build && changeset publish
```

Build output: `dist/` — ESM + CJS + `.d.ts` per entry point. CSS tokens copied from `src/tokens/` to `dist/tokens/`.
