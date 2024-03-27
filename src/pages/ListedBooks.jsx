import { Outlet } from "react-router-dom";
import Tabs from "../components/Tabs";

const ListedBooks = () => {
  return (
    <div className="w-full">
      <div className="w-full text-center bg-base-200 mt-8 rounded-lg py-10 font-bold text-3xl">
        Books
      </div>

      <Tabs />
    
      <Outlet />
    </div>
  );
};

export default ListedBooks;
