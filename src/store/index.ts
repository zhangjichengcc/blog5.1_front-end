import exampleReducer from '@/store/slice/exampleSlice';
import globalSlice from '@/store/slice/globalSlice';
import homeSlice from '@/store/slice/homeSlice';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// 配置 Redux Store
// 所有的 reducer 需要在这里注册，作为全局状态的一部分
const store = configureStore({
  reducer: {
    example: exampleReducer, // 示例切片管理的状态
    home: homeSlice, // 首页切片管理的状态
    global: globalSlice, // 全局切片管理的状态
  },
});

// 定义 RootState 类型，用于描述全局状态的类型
export type RootState = ReturnType<typeof store.getState>;

// 定义 AppDispatch 类型，用于描述 Redux dispatch 函数的类型
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
