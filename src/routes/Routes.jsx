import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ReadBooks from "../components/ReadBooks";
import WishlistBooks from "../components/WishlistBooks";
import BookDetails from "../pages/BookDetails";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import { getFromLocalStorage } from "../utils";

export const router = createBrowserRouter([
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
            loader: () => getFromLocalStorage("read"),
          },
          {
            path: "wishlist",
            element: <WishlistBooks />,
            loader: () => getFromLocalStorage("wishlist"),
          },
        ],
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails/>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/page-to-read",
        element: <PagesToRead />,
      },
    ],
  },
]);
