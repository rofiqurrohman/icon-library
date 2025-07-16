import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {},
  server: {
    proxy: {
      '/api/icon/solid': {
        target: 'https://gitfront.io/r/bagasnur/Tir8ug6S5ZtN/icon-font/raw/solid/icon-font-solid.json',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/icon\/solid/, ''),
      },
      '/api/icon/line': {
        target: 'https://gitfront.io/r/bagasnur/Tir8ug6S5ZtN/icon-font/raw/line/icon-font-line.json',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/icon\/line/, ''),
      },
    },
  },
});
