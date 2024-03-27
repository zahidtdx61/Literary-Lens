import { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = ({tabIndex, setTabIndex}) => {
  console.log(tabIndex);

  return (
    <div className="mt-8 flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
      <Link
        to={""}
        onClick={() => {
          console.log('Now', tabIndex);
          setTabIndex(0);
        }}
        className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
          tabIndex === 0 ? "border border-b-0" : "border-b"
        }`}
      >
        <span>Read Books</span>
      </Link>

      <Link
        to={"wishlist"}
        onClick={() => {
          console.log('Now', tabIndex);
          setTabIndex(1);
        }}
        className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2  ${
          tabIndex === 1 ? "border border-b-0" : "border-b"
        }`}
      >
        <span>Wishlist Books</span>
      </Link>
    </div>
  );
};

export default Tabs;
