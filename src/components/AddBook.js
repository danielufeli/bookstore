import React from 'react';

const AddBook = ({ categories }) => {
    return (
        <>
            <h1>Add New Book</h1>
            <form>
                <input type="text" name="bookTitle" placeholder="Book Title" />
                <select defaultValue="Category">
                    <option value="Category" disabled>
                        Category
                    </option>
                    {
                        categories
                            .map(category =>
                                <option value={category.name} key={category.id}>
                                    {category.name}
                                </option>)
                    }

                </select>
                <input type="submit" value="ADD BOOK" />
            </form>
        </>
    )
}

export default AddBook;