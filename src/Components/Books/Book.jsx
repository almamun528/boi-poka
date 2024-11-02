import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => { //In this here the props we receive { book } from map, 23 number line in <Books/> component 
  //here { book } = all single object [one by one object].


  const {bookId, bookName, tags, author, category, image, rating, totalPages } = book;
  //8 number line destructuring the object and using into return. 
  
  return (
    <>
      <div className=" py-4 px-2 rounded-md bg-gray-200 shadow-xl ">
        <figure className="my-8">
          <img
            className="rounded-xl h-[250px] mb-3 mx-auto"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div>
          {" "}
          Tags:
          {tags.map((tag, indx) => (
            <button
              className="btn m-2 bg-transparent hover:bg-transparent"
              key={indx}
            >
              {" "}
              {tag}{" "}
            </button>
          ))}
        </div>
        <div className=" mt-3 text-left">
          <h2 className="card-title">Name: {bookName}</h2>

          <div className="divider my-2"></div>
          <p className="font-semibold my-1">Category : {category} </p>
          <p>Author Name : {author} </p>
          <p>Ratting : {rating} </p>
          <p>Total Page : {totalPages} </p>
          <div className="card-actions ">


        {/* in this here we are Linked the button with dynamic book id according to mainJSX file,Into Main jsx file we already declared the path name 31 number line what path will be  path:"/books/:bookId",  path will be books and bookId 
        in this here we */}
       
            <Link  to={`/books/${bookId}`} >
              <button className="btn bg-green-500 hover:bg-green-800 hover:text-white mt-2">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
