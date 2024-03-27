import { useLoaderData } from "react-router-dom";
import BooksInfo from "../components/BooksInfo";
import { addToRead, addToWishlist } from "../utils";

const BookDetails = () => {
  const book = useLoaderData();

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const info = { totalPages, rating, publisher, yearOfPublishing };

  const saveDataToRead = () => {
    addToRead("read", book);
  };

  const saveDataToWishlist = () => {
    addToWishlist("wishlist", book);
  };

  return (
    <div className="w-[90%] mx-auto mb-2 lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="w-full mt-4 lg:h-[calc(100vh-120px)] bg-zinc-200 p-4 rounded-lg">
        <img
          src={image}
          className="w-full h-full object-contain mx-auto object-center"
        />
      </div>

      <div className="w-full mt-4 px-4">
        <h1 className="text-4xl font-bold mb-4">{bookName}</h1>
        <h3 className="text-[#131313] text-xl font-sans font-medium">
          By : {author}
        </h3>

        <div className="divider mb-0"></div>
        <h3 className="text-[#131313] text-xl font-sans font-medium">
          {category}
        </h3>
        <div className="divider mt-0"></div>

        <p className="text-[#131313B2] text-sm">
          <span className="font-bold text-base text-[#131313]">Review: </span>{" "}
          {review}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <p className="font-bold text-[#131313] text-xl">Tag</p>
          <div className="my-4 flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-base-200 text-primary-green rounded-full py-1 px-4"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="divider m-0"></div>

        <BooksInfo info={info} />

        <div className="mt-4 font-bold">
          <button
            onClick={saveDataToRead}
            className="px-5 py-2 font-semibold border rounded dark:border-[#1313134D] dark:text-gray-700 
            hover:border-gray-800 hover:text-black"
          >
            Read
          </button>

          <button
            onClick={saveDataToWishlist}
            className="ml-8 px-5 py-2 font-semibold border rounded bg-secondary-sky text-white 
            hover:opacity-70"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
