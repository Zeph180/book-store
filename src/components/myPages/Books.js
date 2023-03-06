/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../redux/features/book/bookSlice';
import AddBookForm from '../AddBookForm';

export default function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemove = (bookId) => {
    dispatch(removeBook(bookId));
    console.log(bookId);
  };

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.title + 2}>
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
