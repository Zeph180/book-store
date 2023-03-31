/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOK_API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GZptIvm5U7UjTmTaBSfW/books';

const fetchBooks = async () => {
  const response = await axios.get(BOOK_API_URL);
  return response.data;
};

const postBook = async (title, author) => {
  const response = await axios.post(BOOK_API_URL, { title, author });
  return response.data;
};

export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const books = await fetchBooks();
    return books;
  },
);

export const addBookAsync = createAsyncThunk(
  'books/addBook',
  async (book, { rejectWIthValue }) => {
    try {
      const newBook = await postBook(book.title, book.author);
      console.log(newBook);
      return newBook;
    } catch (error) {
      return rejectWIthValue(error.response.data);
    }
  },
);
