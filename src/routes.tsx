/*
 * @Author: zhangjicheng
 * @Date: 2025-01-10 15:00:26
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-14 11:44:02
 * @FilePath: /blog5.1_front-end/src/routes.tsx
 * @Description: Do not edit
 */
import Layout from '@/layouts/BaseLayout';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const User = lazy(() => import('@/pages/User'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />, // 主布局
    // Component: Layout,
    children: [
      {
        path: '/',
        element: <Home />, // 首页
        loader: async () => {
          // 模拟数据加载
          return new Promise((resolve) =>
            setTimeout(() => resolve({ message: 'Hello from loader!' }), 2000),
          );
        },
        hydrateFallbackElement: <div style={{ color: '#f00' }}>Loading...</div>,
      },
      {
        path: '/user',
        element: <User />, // 用户页
      },
    ],
  },
];

export default routes;
