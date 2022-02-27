import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookItem from './BookItem';
import '../styles/bookStyle.css';

const AllBook = () => {
  const books = useSelector((state) => state.booksReducer, shallowEqual);
  useEffect(() => {
    getBooks();
  }, [books]);
  return (
    <>
      <div className="book-list">
        <ul className="book">
          {
            books.map((book) => <BookItem book={book} key={book.id} />)
          }
        </ul>
      </div>
    </>
  );
};

export default AllBook;
