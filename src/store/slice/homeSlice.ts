/*
 * @Author: zhangjicheng
 * @Date: 2022-10-14 14:52:20
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-14 17:26:07
 * @FilePath: /blog5.1_front-end/src/store/slice/homeSlice.ts
 */
import { type MenuItem } from '@/components/HomeMenu';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  /** 首页菜单 */
  homeMenu: Array<MenuItem>;
  /** 当前激活的菜单 */
  activeMenu?: MenuItem['key'];
}

const initialState: HomeState = {
  /** 首页菜单 */
  homeMenu: [],
  activeMenu: undefined,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    /** 设置首页菜单 */
    setMenu: (state, action: PayloadAction<HomeState['homeMenu']>) => {
      state.homeMenu = action.payload;
    },
    /** 设置当前激活的菜单 */
    setActiveMenu: (state, action: PayloadAction<HomeState['activeMenu']>) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { setMenu, setActiveMenu } = homeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectHomeMenu = (state: RootState) => state.home.homeMenu;

export default homeSlice.reducer;
