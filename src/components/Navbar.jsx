import { MdMenuOpen } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navStlye = (isActive) => {
    return [
      isActive ? "text-primary-green" : "text-light-ash",
      isActive
        ? "border border-primary-green px-3 py-1 rounded font-semibold"
        : "font-medium",
    ].join(" ");
  };

  const navStlyeSM = (isActive) => {
    return [
      isActive ? "text-primary-green" : "text-light-ash",
      isActive
        ? "border-b-2 border-primary-green py-1 font-semibold"
        : "font-medium",
      "w-fit",
    ].join(" ");
  };

  return (
    <div className="navbar p-2 lg:px-16 flex items-center justify-center shadow-lg fixed bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} role="button" className="lg:hidden mr-2">
            <MdMenuOpen size={50} />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-white rounded-box w-52"
          >
            <NavLink
              to={"/"}
              className={({ isActive }) => navStlyeSM(isActive)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/listed-books"}
              className={({ isActive }) => navStlyeSM(isActive)}
            >
              Listed Books
            </NavLink>
            <NavLink
              to={"/page-to-read"}
              className={({ isActive }) => navStlyeSM(isActive)}
            >
              Page to Read
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => navStlyeSM(isActive)}
            >
              About Us
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => navStlyeSM(isActive)}
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <Link to={"/"} className="text-xl md:text-3xl font-bold">
          Literary Lens
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-6">
          <NavLink to={"/"} className={({ isActive }) => navStlye(isActive)}>
            Home
          </NavLink>
          <NavLink
            to={"/listed-books"}
            className={({ isActive }) => navStlye(isActive)}
          >
            Listed Books
          </NavLink>
          <NavLink
            to={"/page-to-read"}
            className={({ isActive }) => navStlye(isActive)}
          >
            Page to Read
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => navStlye(isActive)}
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => navStlye(isActive)}
          >
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <button className="font-semibold bg-primary-green text-white px-4 py-2 rounded-md hover:opacity-60">
          Sign In
        </button>
        <button className="font-semibold bg-secondary-sky text-white px-4 py-2 rounded-md hover:opacity-60">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
