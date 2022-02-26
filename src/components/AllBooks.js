import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookItem from './BookItem';

const AllBook = () => {
  const books = useSelector((state) => state.booksReducer, shallowEqual);
  useEffect(() => {
    getBooks();
  }, [books]);
  return (
    <>
      {
        books.map((book) => <BookItem book={book} key={book.id} />)
      }
    </>
  );
};

export default AllBook;
