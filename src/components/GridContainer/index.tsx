/*
 * @Author: zhangjicheng
 * @Date: 2024-08-26 16:31:55
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-15 15:01:01
 * @FilePath: /blog5.1_front-end/src/components/GridContainer/index.tsx
 * @Description: 栅格化布局容器
 */

import { FC, ReactNode, useEffect } from 'react';

import { setGird } from '@/store/slice/globalSlice';
import { useGrid } from '@/utils/hooks';
import { useDispatch } from 'react-redux';

const Layout: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  const appDispatch = useDispatch();
  const grid = useGrid();

  // 使用 useEffect 在 grid 变化时更新状态
  useEffect(() => {
    appDispatch(setGird(grid));
  }, [grid, appDispatch]);

  return children;
};

export default Layout;
