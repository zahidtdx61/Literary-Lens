import { useEffect, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import ReadBooksCard from "./ReadBooksCard";

const WishlistBooks = () => {
  const books = useLoaderData();
  const [sortType] = useOutletContext();
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    setBooksData(books);
    if (sortType !== "") {
      let tempData = [];
      books.map((book) => {
        let choose;
        if (sortType === "rating") choose = "rating";
        if (sortType === "pages") choose = "totalPages";
        if (sortType === "year") choose = "yearOfPublishing";

        tempData.push([book[choose], book.bookId]);
      });

      if (sortType === "rating") {
        tempData.sort((a, b) => {
          const a1 = parseFloat(a[0]);
          const a2 = parseFloat(a[1]);
          const b1 = parseFloat(b[0]);
          const b2 = parseFloat(b[1]);

          if (a1 !== b1) {
            return a1 - b1;
          } else {
            return a2 - b2;
          }
        });
      } else {
        tempData.sort((a, b) => {
          const a1 = parseInt(a[0]);
          const a2 = parseInt(a[1]);
          const b1 = parseInt(b[0]);
          const b2 = parseInt(b[1]);

          if (a1 !== b1) {
            return a1 - b1;
          } else {
            return a2 - b2;
          }
        });
      }

      let tempBookArray = [];
      tempData.map((item) => {
        const [val, bookId] = item;
        const book = books.find((book) => book.bookId === bookId);
        tempBookArray.push(book);
      });

      setBooksData(tempBookArray);
    }
  }, [sortType]);

  if (!books) return <></>;

  return (
    <div className="w-full mt-4 flex flex-col gap-4">
      {booksData.map((book) => (
        <ReadBooksCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default WishlistBooks;
