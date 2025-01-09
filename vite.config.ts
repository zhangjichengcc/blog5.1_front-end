import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://cn.vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import '/src/styles/variables.less';`,
        // 允许 Less 使用 Vite 配置的别名
        paths: '/src',
        javascriptEnabled: true, // 启用 Less 的 JS 支持
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
