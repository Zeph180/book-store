/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { useDispatch } from 'react-redux';
import { booksActions, removeBookAsync } from '../redux/features/book/bookSlice';
import Button from './Button';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id, category,
  } = props;

  const handleRemove = (e) => {
    const { id } = e.target.dataset;
    dispatch(booksActions.removeBook(id));

    // Delete in the backend
    dispatch(removeBookAsync(id));
  };

  return (
    <div>
      <div>
        <span>{category}</span>
        <h2>{title}</h2>
        <p>{author}</p>
        <div>
          <Button type="submit" dataId={id} handleClick={handleRemove}>
            Remove
          </Button>
          <Button type="button" data-id={id}>
            <span>Edit</span>
          </Button>
        </div>
      </div>
      <div>
        <div>
          <span>64%</span>
          <span>Completed</span>
        </div>
      </div>
      <div>
        <span>Current Chapter</span>
        <h4>Chapter 56</h4>
        <button type="button" className="progress-btn">
          Update progress
        </button>
      </div>
    </div>
  );
};

export default Book;
