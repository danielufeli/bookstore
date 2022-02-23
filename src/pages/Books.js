
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from '../components/AddBook';
import AllBook from '../components/AllBooks';

const Books = () => {

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

  const books = [
    {
      id: uuidv4(),
      name: "The Hunger Games",
      category: "Action",
      author: "Suzanne Collins"
    },
    {
      id: uuidv4(),
      name: "Dune",
      category: "Science Fiction",
      author: "Suzanne Collins"
    },
    {
      id: uuidv4(),
      name: "Capital in the Twenty-First Century",
      category: "economy",
      author: "Frank Herbert"
    },
  ];

  return (
    <>
      <div>
        <AllBook books={books} />
        <AddBook categories={categories} />
      </div>
    </>
  )
};

export default Books;