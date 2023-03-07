/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/features/book/bookSlice';

export default function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBookAsync({
        title, author, item_id: () => crypto.randomUUID(), category: 'fictipon',
      }));
    } else {
      alert('Fields can not be empty');
    }
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
