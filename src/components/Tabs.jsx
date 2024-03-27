import { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-full mt-8 flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
      <Link
        to={""}
        onClick={() => setTabIndex(0)}
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-lg ${
          tabIndex === 0 ? "border border-b-0" : "border-b"
        }`}
      >
        <span>Read Books</span>
      </Link>

      <Link
        to={"wishlist"}
        onClick={() => setTabIndex(1)}
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-lg ${
          tabIndex === 1 ? "border border-b-0" : "border-b"
        }`}
      >
        <span>Wishlist Books</span>
      </Link>
    </div>
  );
};

export default Tabs;
