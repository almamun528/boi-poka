import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books, SetBooks] = useState([]) //!this state for store the books data from json file

        useEffect(()=>{ //? this hooks use to load data from json file
            fetch("/booksData.json")
            .then(response => response.json())
            .then(response => SetBooks(response))
        },[])
        //we get data after fetching and set the data into SetBook Function. books variable now becomes the data of all books, because we store all data into by 10 number line.

    return (
        <>
        <h1 className='text-center my-4 text-xl font-bold'>Books</h1>
          <div className='grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-11'>

          { 

          //* books means all data of json file, now we can use to run into each object.

            books.map( (book , index) => <Book book={book} key={index}>book</Book> )

            //? in this may we are creating <Book/> component and passing one by one book object into <Book/> component.

            //!We also Drilling props book={book} into <Book/> component so that we can Receive each object into <Book/> component 
            }


            
          </div>
        </>
    );
};

export default Books;

