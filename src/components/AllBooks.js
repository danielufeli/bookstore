import React from 'react';
import { PropTypes } from 'prop-types';
import BookItem from './BookItem';

const AllBook = ({ books }) => (
  <>
    {
                books.map((book) => <BookItem book={book} key={book.id} />)
            }
  </>
);

AllBook.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default AllBook;
