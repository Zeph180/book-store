/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAsync, removeBook } from '../../redux/features/book/bookSlice';
import AddBookForm from '../AddBookForm';

export default function Books() {
  const { books } = useSelector((state) => {
    const bookArray = Object.values(state.books);
    const flattBooks = bookArray.flat();
    return { books: flattBooks };
  });
  const dispatch = useDispatch();

  console.log(books);

  useEffect(() => {
    dispatch(fetchBooksAsync());
    console.log(books);
  }, [dispatch]);

  const handleRemove = (bookId) => {
    dispatch(removeBook(bookId));
    console.log(bookId);
  };

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            {' '}
            <button type="button" onClick={() => handleRemove(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <AddBookForm />
    </>
  );
}
