/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      state.push({ title, author, id: crypto.randomUUID() });
    },

    removeBook: (state, action) => {
      const bookId = action.payload;
      return state.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
