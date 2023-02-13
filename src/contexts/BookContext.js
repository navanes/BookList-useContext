import React, {createContext, useState} from 'react';
import uuid from 'uuid/dist/esm-browser/v1';

export const BookContext = createContext();

function BookContextProvider({children}) {
    const [books, setBooks] = useState([
        {title: 'Lord Of The Rings', author: 'J. R. R. Tolkien'},
        {title: 'Harry Potter', author: 'J. K. Rowling'},
        {title: 'Game Of Thrones', author: 'George R. R. Martin'}
    ])
    const addBook = (title, author) => {
        setBooks([...books, {
            title, author, id: uuid()
        }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;