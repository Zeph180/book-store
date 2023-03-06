/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/book/bookSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});
