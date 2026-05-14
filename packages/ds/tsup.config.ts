import { defineConfig } from 'tsup';
import { cp } from 'node:fs/promises';

export default defineConfig({
  entry: {
    'primitives/index': 'src/primitives/index.ts',
    'display/index': 'src/display/index.ts',
    'layout/index': 'src/layout/index.ts',
    'overlay/index': 'src/overlay/index.ts',
    'surfaces/index': 'src/surfaces/index.ts',
    'lib/utils': 'src/lib/utils.ts'
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  external: ['react', 'react-dom'],
  async onSuccess() {
    await cp('src/tokens', 'dist/tokens', { recursive: true });
  }
});
