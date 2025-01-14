import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://cn.vite.dev/config/
export default defineConfig({
  plugins: [
    svgr(), // 添加 svgr 插件
    react(),
  ],
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
