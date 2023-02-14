import React, {createContext, useReducer} from 'react';
import {bookReducer} from "../reducers/bookReducer";

/*{title: 'Lord Of The Rings', author: 'J. R. R. Tolkien', id: 1},
{title: 'Harry Potter', author: 'J. K. Rowling', id: 2},
{title: 'Game Of Thrones', author: 'George R. R. Martin', id: 3}*/

export const BookContext = createContext();

function BookContextProvider({children}) {
    const [books, dispatch] = useReducer(bookReducer,[])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
