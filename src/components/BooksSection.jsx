import BooksCard from "./BooksCard";

const BooksSection = ({ booksData }) => {
  return (
    <div className="w-full my-16">
      <h1 className="text-center text-4xl font-bold my-4">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-[90%] lg:w-[1220px] mx-auto">
        {booksData.map((book) => {
          return <BooksCard key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default BooksSection;
