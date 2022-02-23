import { v4 as uuidv4 } from 'uuid';

const categories = [
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

export default categories;
