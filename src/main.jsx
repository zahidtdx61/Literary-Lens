import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import BookDetails from "./pages/BookDetails";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails />,
      },
      {
        path: "/page-to-read",
        element: <ListedBooks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
