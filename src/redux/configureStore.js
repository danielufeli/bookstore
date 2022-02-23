import { createStore, combineReducers } from 'redux';

import books from './books/books';
import categories from './categories/categories';
import booksReducer from './books/reducers';
import categoriesReducer from './categories/reducers';

const reducers = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

export default createStore(
  (state, action) => reducers(state, action),
  { books, categories },
);
