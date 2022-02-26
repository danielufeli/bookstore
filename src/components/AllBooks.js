import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import BookItem from './BookItem';

const AllBook = () => {
  const books = useSelector((state) => state.booksReducer, shallowEqual);
  return (
    <>
      {
        books.map((book) => <BookItem book={book} key={book.id} />)
      }
    </>
  );
};

export default AllBook;
