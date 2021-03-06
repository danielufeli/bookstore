import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookCall } from '../redux/books/books';

const BookItem = ({
  book: { id, category, title },
}) => {
  const dispatch = useDispatch();
  return (

    <>
      <div className="book-panel">
        <div className="left-side">
          <span>{category}</span>
          <h1>{title}</h1>
        </div>
        <div className="footer-menu">
          <ul>
            <li>Comments</li>
            <li><button type="button" onClick={() => dispatch(removeBookCall(id))}> Remove </button></li>
            <li>Edits</li>
          </ul>
        </div>
        <div className="progress">
          <span className="oval" />
          <p>0% Completed</p>
        </div>
        <div className="right-side">
          <span>CURRENT CHAPTER</span>
          <h2>Introduction</h2>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
