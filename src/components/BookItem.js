import React from 'react';
import { PropTypes } from 'prop-types';

const BookItem = ({ book: { category, name, author } }) => (
  <>
    <div className="book-panel">
      <div className="left-side">
        <span>{category}</span>
        <h1>{name}</h1>
        <span>{author}</span>
      </div>
      <div className="footer-menu">
        <ul>
          <li>Comments</li>
          <li>Remove</li>
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

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
