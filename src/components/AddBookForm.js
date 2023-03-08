import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions, addBookAsync } from '../redux/features/book/bookSlice';
import './AddBookForm.css';

const Form = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !author.trim()) return;

    const bookData = {
      item_id: crypto.randomUUID(),
      title,
      author,
      category,
    };

    // Add book to state
    dispatch(booksActions.addBook(bookData));
    dispatch(addBookAsync(bookData));

    // Empty form inputs
    setAuthor('');
    setTitle('');
    setCategory('');
  };

  return (
    <>
      <p className="form-head">ADD NEW BOOK</p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Book's Title"
          id="title"
          aria-label="Book title input...."
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          className="title-input"
          required
        />
        {/* <input
          type="text"
          placeholder="Author's Name"
          name="author"
          id="author"
          aria-label="Book author input"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
          className="author-input"
          required
        /> */}
        <select
          name="category"
          id="category"
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Book Category"
          required
          className="cat-input"
        >
          <option value="">Choose Category...</option>
          <option value="Technology">Technology</option>
          <option value="Economics">Economics</option>
          <option value="Language">Language</option>
          <option value="Science">Science</option>
          <option value="Politics">Politics</option>
        </select>
        <button type="submit" className="submit-btn">
          Add Book
        </button>
      </form>
    </>
  );
};

export default Form;
