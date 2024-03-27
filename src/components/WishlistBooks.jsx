import { useLoaderData } from "react-router-dom";
import ReadBooksCard from "./ReadBooksCard";

const WishlistBooks = () => {
  const books = useLoaderData();

  if (!books) return <></>;

  return (
    <div className="w-full mt-4 flex flex-col gap-4">
      {books.map((book) => (
        <ReadBooksCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default WishlistBooks;
