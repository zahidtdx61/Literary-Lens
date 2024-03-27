import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
  const { bookId, bookName, author, image, category, tags, rating } = book;
  return (
    <Link
      to={`/book-details/${bookId}`}
      className="w-full flex flex-col rounded-lg p-4 border border-light-border"
    >
      <div className="w-full h-64 bg-base-200 rounded-lg p-4">
        <img
          src={image}
          alt=""
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="my-4 flex gap-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-base-200 text-primary-green rounded-full py-1 px-4"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex-1">
        <h1 className="text-2xl font-bold my-1">{bookName}</h1>
        <h1 className="text-[#131313CC] text-base font-medium">
          By : {author}
        </h1>
      </div>

      <div className="divider"></div>

      <div className="text-[#131313CC] font-medium flex items-center justify-between">
        <span>{category}</span>
        <span className="flex items-center gap-1">
          {rating}
          <FaRegStar size={20} />
        </span>
      </div>
    </Link>
  );
};

export default BooksCard;
