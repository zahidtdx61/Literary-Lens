import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReadBooks from "./components/ReadBooks";
import WishlistBooks from "./components/WishlistBooks";
import "./index.css";
import MainLayout from "./MainLayout/MainLayout";
import BookDetails from "./pages/BookDetails";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: "wishlist",
            element: <WishlistBooks />,
          },
        ],
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails />,
        loader: async ({ params }) => {
          const resp = await fetch("/booksData.json");
          const books = await resp.json();
          const book = books.find((book) => book.bookId === params.bookId);
          return book;
        },
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
    <Toaster />
  </React.StrictMode>
);
