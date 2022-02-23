import { v4 as uuidv4 } from 'uuid';

const books = [
  {
    id: uuidv4(),
    name: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    name: 'Dune',
    category: 'Science Fiction',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    name: 'Capital in the Twenty-First Century',
    category: 'economy',
    author: 'Frank Herbert',
  },
];

export default books;
