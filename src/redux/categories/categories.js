import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    name: 'Action',
  },
  {
    id: uuidv4(),
    name: 'Science Fiction',
  },
  {
    id: uuidv4(),
    name: 'Economy',
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
