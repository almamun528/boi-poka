import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getDataByWhislist, getStoreReadList } from "../assets/Utilities/AddToDB";
import Book from "../Components/Books/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]); // Initialize wishList state
  const allBooks = useLoaderData();

  // Fetch Read List
  useEffect(() => {
    const storedReadList = getStoreReadList() || [];
    const storedReadListInt = storedReadList.map(id => parseInt(id));

    const readBookList = allBooks.filter(book =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, [allBooks]);

  // Fetch Wish List
  useEffect(() => {
    const storeWishList = getDataByWhislist() || [];
    const storeWishListInt = storeWishList.map(id => parseInt(id));

    const wishListSelect = allBooks.filter(book =>
      storeWishListInt.includes(book.bookId)
    );
    setWishList(wishListSelect);
  }, [allBooks]);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read List ({readList.length})</Tab>
          <Tab>Wish List ({wishList.length})</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-2 gap-5">
            {readList.map((book) => (
              <Book book={book} key={book.bookId} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-2 gap-5">
            {wishList.map((book) => (
              <Book book={book} key={book.bookId} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
