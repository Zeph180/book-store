/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AAOdRekzcoJXQM6OxIM5';

fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then(console.log);

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const resp = await axios.get(`${BASE_URL}/books`);
  console.log(resp.data);
  return resp.data;
});

export const addBookAsync = createAsyncThunk('books/addBook', async (bookData) => {
  const resp = await axios.post(`${BASE_URL}/books`, bookData);
  console.log(resp.data);
  return resp.data;
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${BASE_URL}/books/${bookId}`);
  return bookId;
});

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [
      {
        title: 'eueueueu',
      },
    ],
  },
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      return state.books.filter((book) => book.item_id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => action.payload)
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      // eslint-disable-next-line arrow-body-style
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        return state.filter((book) => book.id !== action.payload);
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
