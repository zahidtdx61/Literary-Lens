import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
