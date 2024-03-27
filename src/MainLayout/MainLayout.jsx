import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="w-full md:w-[90%] mx-auto">
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default MainLayout;
