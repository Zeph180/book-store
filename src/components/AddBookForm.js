/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/features/book/bookSlice';

export default function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author }));
    setAuthor('');
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>ADD NEW BOOK</h3>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add book</button>
    </form>
  );
}
