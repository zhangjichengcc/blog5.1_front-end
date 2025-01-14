import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 定义切片状态的类型
interface ExampleState {
  value: number; // 当前值
}

// 定义初始状态
const initialState: ExampleState = {
  value: 0, // 初始值为 0
};

// 使用 createSlice 创建一个 Redux 切片
const exampleSlice = createSlice({
  name: 'example', // 切片的名字，作为 action type 的前缀
  initialState, // 切片的初始状态
  reducers: {
    // 定义状态修改的逻辑，函数名会自动生成对应的 action
    increment: (state) => {
      state.value += 1; // 增加值
    },
    decrement: (state) => {
      state.value -= 1; // 减少值
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload; // 设置指定值
    },
  },
});

// 导出 actions，用于组件中派发状态修改
export const { increment, decrement, setValue } = exampleSlice.actions;

// 导出 reducer，供 store 注册使用
export default exampleSlice.reducer;
