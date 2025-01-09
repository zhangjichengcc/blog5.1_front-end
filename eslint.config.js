import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    js.configs.recommended,
    eslintPluginPrettierRecommended, // 启用 Prettier，并关闭 ESLint 中和 Prettier 冲突的规则
    ...tseslint.configs.recommendedTypeChecked,
  ],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist', 'node_modules'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
      ecmaFeatures: {
        jsx: true, // 启用 JSX
      },
    },
  },
  plugins: {
    react, // 注册 react 插件
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'warn', // Prettier 校验规则
    'no-unused-vars': 'warn', // 未使用变量警告
    eqeqeq: 'error', // 强制使用全等
  },
});
