import { defineConfig, globalIgnores } from 'eslint/config';
import vitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';
export default defineConfig([
  ...vitals,
  ...typescript,
  globalIgnores(['.next/**', '.pnpm-store/**', 'next-env.d.ts']),
]);
