import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
