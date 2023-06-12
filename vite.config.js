/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 5555,
    strictPort: true,
    open: true,
  },
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    sourcemap: true,
  },
  preview: {
    port: 8080,
  },
});
