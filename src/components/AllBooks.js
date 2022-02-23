import React from 'react';
import BookItem from './BookItem';


const AllBook = ({ books }) => {
    return (
        <>
            {
                books.map(book => <BookItem book={book} key={book.id} />)
            }
        </>
    )
}

export default AllBook;