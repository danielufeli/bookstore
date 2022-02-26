const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const getBooksSuccess = (payload) => ({
  type: GET_BOOKS_SUCCESS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    case GET_BOOKS_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};

export default reducer;

const appId = 'vxVZbm4frxeaYqc1XOCg';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`;

export const getBooks = () => async (dispatch) => {
  const response = await fetch(`${url}/books`);
  const data = await response.json();
  const books = Object.entries(data).map(([key, value]) => ({
    id: key,
    title: value[0].title,
    category: value[0].category,
  }));
  dispatch(getBooksSuccess(books));
};

export const addBookApi = (payload) => async (dispatch) => {
  const data = await fetch(`${url}/books`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-type': 'application/JSON' },
  });
  if (data.status === 201) {
    dispatch(addBook(payload));
  }
};
