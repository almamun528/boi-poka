import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Error from './Components/Error.jsx';
import Home from './Components/Home.jsx/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Details from './Components/Books/Details/Details.jsx';
import ListedBooks from './ListedBooks/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path : '/dashboard',
        element : <Dashboard></Dashboard>
      },
      {
        path:"/books/:bookId", 
        element: <Details></Details>,
        // loader: ()=> fetch(`/booksData.json${bookId}`)
        loader: ()=> fetch('/booksData.json')
        //this here loader working to load data from json and bookID is Targeting the identity for a book so that we can select one by one while user click on it. ID can be any unique key. 
      },
      {
        path:"/ListedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  </StrictMode>,
)
