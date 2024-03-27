import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loader />;

  return (
    <div className="w-full md:w-[90%] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
