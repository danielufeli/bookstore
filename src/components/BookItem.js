import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookCall } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const BookItem = ({
  book: { id, category, title },
}) => {
  const dispatch = useDispatch();
  return (

    <>
      <li>
        <div>
          <h3 className="category">{category}</h3>
          <h2 className="title">{title}</h2>
          <button type="button" className="btn"> Comment </button>
          <button type="button" className="btn" onClick={() => dispatch(removeBookCall(id))}> Remove </button>
          <button type="button" className="btn"> Edit </button>
        </div>
        <div className="progress-section">
          <div className="book-oval">
            <div className="bar-p">
              <CircularProgressbar value="70" />
            </div>
            <div>
              <h2 className="percent">70%</h2>
              <span className="completed">Completed</span>
            </div>
          </div>
          <div className="chapter">
            <p className="current-chapter">Current Chapter</p>
            <p className="chapter-number">Chapter 17</p>
            <button type="button" style={{ width: '150px' }}>Update Progress</button>
          </div>
        </div>
      </li>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
