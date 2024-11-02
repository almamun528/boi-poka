import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const {bookId} = useParams() // we are using useParams Hooks to get the bookID from main JSX file.

    const data = useLoaderData() // this hooks load all data from main.jsx as we already use loader into <Details/> component.
    //!In this here  useLoaderData() hooks Load all Data. but we need only One data according to users Click. 
 

    const book = data.find(book => book.bookId === parseInt(bookId) )

    //! 11 Line, We are going to use find methods so that we can only get one data which is matching with books's id and users clicked book's id. 
    //* it seams like as we are loading all data in here so we may have to match which one is matching with users action, as we use Filter we may find an element and show into return. 

    const {author,bookName,yearOfPublishing,review,image,publisher} = book
 
 

    
    return (
        <>
            <main className='text-left space-y-5 my-7 w-11/12 mx-auto'>
                <p>Book Name : {bookName} </p>
                <img className='h-60 shadow-2xl rounded' src={image} alt="" />
                <p className='flex gap-5 '>
                    <span>Author : {author} </span>
                    <span> Publisher : {publisher} </span>
                </p>
                <summary> <span className='font-bold mr-3'>Book Review</span>
                {review}
                </summary>
                <br /> <br />
                <div className='flex gap-3'>
                <button className='bg-green-400 px-3 py-2 rounded hover:text-white hover:bg-green-700'>Wish List</button>
                <button className='bg-green-400 px-3 py-2 rounded hover:text-white hover:bg-green-700'>Already Read</button>
                </div>
            </main>
        </>
    );
};

export default Details;