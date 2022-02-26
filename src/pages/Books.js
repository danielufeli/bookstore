import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import AddBook from '../components/AddBook';
import AllBook from '../components/AllBooks';

const Books = () => {
  const categories = useSelector((state) => state.categoriesReducer, shallowEqual);

  return (
    <>
      <div>
        <AllBook />
        <AddBook categories={categories} />
      </div>
    </>
  );
};

export default Books;
