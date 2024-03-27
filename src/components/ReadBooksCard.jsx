import { GoPeople } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineRequestPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ReadBooksCard = ({ book }) => {
  const {
    bookId,
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

  return (
    <div className="w-full p-4 border border-light-border rounded-lg flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[25%]">
        <div className="w-full h-[200px] bg-base-200 p-4 rounded-lg">
          <img src={image} className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-2xl font-bold">{bookName}</h1>
        <h3 className="font-medium text-[#131313CC] text-sm mt-2">
          By : {author}
        </h3>

        <div className="mt-2 w-full flex flex-col lg:flex-row gap-x-4 items-start lg:items-center justify-center lg:justify-start">
          <div className="flex w-fit items-center gap-x-2">
            <h1 className="font-bold w-fit text-[#131313]">Tag</h1>
            <div className="mt-2 w-fit flex gap-x-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="bg-base-200 w-fit text-primary-green text-center rounded-full px-3 py-1 text-sm font-medium"
                >
                  # {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex w-fit items-center gap-x-0 text-sm text-[#131313CC]">
            <IoLocationOutline size={30} />
            <p className="w-fit">Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>

        <div className="text-[#13131399] mt-2 font-medium text-sm flex gap-1 lg:gap-4 flex-col lg:flex-row">
          <div className="flex gap-2 items-center">
            <GoPeople /> Publisher : {publisher}
          </div>
          <div className="flex gap-1 items-center">
            <MdOutlineRequestPage /> Page : {totalPages}
          </div>
        </div>

        <div className="divider my-2 w-full"></div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-center font-medium text-sm">
          <button className="px-4 py-1 w-fit hover:opacity-70 bg-[#328EFF26] text-[#328EFF] rounded-full">
            Category: {category}
          </button>

          <button className="px-4 py-1 w-fit hover:opacity-70 bg-[#FFAC3326] text-[#FFAC33] rounded-full">
            Rating: {rating}
          </button>

          <Link
            to={`/book-details/${bookId}`}
            className="px-4 py-1  w-fit hover:opacity-70 bg-[#23BE0A] text-white rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBooksCard;
