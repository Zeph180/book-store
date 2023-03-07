/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAsync, removeBook, removeBookAsync } from '../../redux/features/book/bookSlice';
import AddBookForm from '../AddBookForm';

export default function Books() {
  const { books } = useSelector((state) => {
    console.log('booksObj: ', state.books);
    const bookArray = Object.values(state.books);
    const flattBooks = bookArray.flat();
    console.log('flat: ', flattBooks);
    return { books: flattBooks };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  const handleRemove = (bookId) => {
    dispatch(removeBookAsync(bookId));
  };

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            {' '}
            <button type="button" onClick={() => handleRemove(book.id)}>Remove</button>
            <span>
              {book.id}
              ...
            </span>
          </li>
        ))}
      </ul>
      <AddBookForm />
    </>
  );
}
