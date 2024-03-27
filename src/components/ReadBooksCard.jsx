import { GoPeople } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineRequestPage } from "react-icons/md";

const ReadBooksCard = ({ book }) => {
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

        <div className="mt-2 w-full flex flex-col lg:flex-row lg:items-center  gap-4">
          <div className=" flex items-center gap-2">
            <div className="font-bold text-[#131313]">Tag</div>
            <div className="mt-2 flex gap-2 items-center">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-base-200 text-primary-green rounded-full py-1 px-3 text-sm font-medium"
                >
                  #{tag}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-1 items-center text-sm text-[#131313CC]">
            <IoLocationOutline size={20} />
            <p>Year of Publishing: {yearOfPublishing}</p>
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

        <div className="flex flex-col lg:flex-row gap-4 font-medium text-sm">
          <button className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] rounded-full">
            Category: {category}
          </button>

          <button className="px-4 py-1 bg-[#FFAC3326] text-[#FFAC33] rounded-full">
            Rating: {rating}
          </button>

          <button className="px-4 py-1 bg-[#23BE0A] text-white rounded-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBooksCard;
