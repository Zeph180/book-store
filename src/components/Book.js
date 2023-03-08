/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  booksActions,
  removeBookAsync,
} from '../redux/features/book/bookSlice';
import Button from './Button';
import './Book.css';
import Progress from './Progress';

const Book = (props) => {
  const [randomPer] = useState(Math.floor(Math.random() * 90 + 10));
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
    <article className="book-cont">
      <section className="cat-sec">
        <span className="category">{category}</span>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="interact-btns-cont">
          <Button
            className="interact-btn"
            type="submit"
            dataId={id}
            handleClick={handleRemove}
          >
            Comment
          </Button>
          <Button
            className="interact-btn"
            type="submit"
            dataId={id}
            handleClick={handleRemove}
          >
            Remove
          </Button>
          <Button className="interact-btn" type="button" data-id={id}>
            Edit
          </Button>
        </div>
      </section>

      <section className="prg">
        <Progress progress={randomPer} />
      </section>

      <section className="chapters-sec">
        <div className="line" />
        <div>
          <span className="chapter-sec-head">Current Chapter</span>
          <p className="chapter">Chapter 5</p>
          <button type="button" className="update-progress">
            Update progress
          </button>
        </div>
      </section>
    </article>
  );
};

export default Book;
