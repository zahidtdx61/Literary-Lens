import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [sortType, setSortType] = useState("");
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/listed-books/wishlist") setTabIndex(1);
    else setTabIndex(0);
  }, []);

  return (
    <div className="w-[90%] mx-auto mb-2 lg:w-full">
      <div className="w-full text-center bg-base-200 mt-8 rounded-lg py-10 font-bold text-3xl">
        Books
      </div>

      <div className="w-full flex justify-center mt-16 mb-8">
        <select
          defaultValue={"sort"}
          onChange={(e) => setSortType(() => e.target.value)}
          name="cars"
          id="cars"
          className="bg-primary-green px-5 py-2 rounded-md text-xl text-white"
        >
          <option disabled value="sort">
            Sort By
          </option>
          <option value="rating" className="bg-transparent">
            Rating
          </option>
          <option value="pages" className="bg-transparent">
            Number of pages
          </option>
          <option value="year" className="bg-transparent">
            Publisher year
          </option>
        </select>
      </div>

      <div className="mt-8 flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
        <Link
          to={``}
          onClick={() => {
            setTabIndex(0);
          }}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-lg ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          }`}
        >
          <span>Read Books</span>
        </Link>

        <Link
          to={`wishlist`}
          onClick={() => {
            setTabIndex(1);
          }}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-lg ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          }`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>

      <Outlet context={[sortType]} />
    </div>
  );
};

export default ListedBooks;
