import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookApi } from '../redux/books/books';

const AddBook = ({ categories }) => {
  const [bookState, setBookState] = useState({
    title: '',
    category: ' ',
  });

  const onChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const { title, category } = bookState;
    if (title.trim()) {
      const newBook = {
        item_id: uuidv4(),
        title,
        category,
      };
      dispatch(addBookApi(newBook));
      setBookState({
        title: '',
        category: ' ',
      });
    } else {
      alert('Please Enter a Value');
    }
  };
  const { title, category } = bookState;
  return (
    <>
      <div>
        <h1>Add New Book</h1>
        <form>
          <input type="text" name="title" value={title} onChange={onChange} placeholder="Book Title" />
          <select value={category} name="category" onChange={onChange}>
            <option value="Category" disabled>
              Category
            </option>
            {
              categories
                .map((category) => (
                  <option value={category.name} key={category.id}>
                    {category.name}
                  </option>
                ))
            }

          </select>
          <button type="submit" onClick={submitBookToStore}>Add Book</button>
        </form>
      </div>
    </>
  );
};

AddBook.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};

export default AddBook;
