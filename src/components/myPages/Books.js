import AddBookForm from '../AddBookForm';

export default function Books() {
  const books = [
    {
      title: 'Young Rich',
      author: '50cent',
    },
    {
      title: 'Js the Good Parts',
      author: 'Adam',
    },
    {
      title: 'Reat  native basics',
      author: 'Bonne Eisseman',
    },
  ];
  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.title + 2}>
            {book.title}
            {' '}
            <button type="button">Remove</button>
          </li>
        ))}
      </ul>
      <AddBookForm />
    </>
  );
}
