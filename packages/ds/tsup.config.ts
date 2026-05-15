import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'primitives/index': 'src/primitives/index.ts',
    'display/index': 'src/display/index.ts',
    'layout/index': 'src/layout/index.ts',
    'overlay/index': 'src/overlay/index.ts',
    'surfaces/index': 'src/surfaces/index.ts',
    'forms/index': 'src/forms/index.ts',
    'feedback/index': 'src/feedback/index.ts',
    'navigation/index': 'src/navigation/index.ts',
    'lib/utils': 'src/lib/utils.ts'
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  external: ['react', 'react-dom'],
  onSuccess: 'rm -rf dist/tokens && cp -R src/tokens dist/tokens'
});
