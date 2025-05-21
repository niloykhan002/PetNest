import { FaPaw, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  //   const { user, logOut } = useAuth();
  const user = true;
  const link = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "active px-5 rounded-lg text-lg"
              : "inactive hover:text-primary text-lg text-dark2 font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive
              ? "active px-5 rounded-lg text-lg"
              : "inactive hover:text-primary text-lg text-dark2 font-medium"
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "active px-5 rounded-lg text-lg"
              : "inactive hover:text-primary text-lg text-dark2 font-medium"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost p-6 hover:bg-secondary hover:border-primary hover:rounded-lg "
          >
            <FaPaw className="text-primary text-lg md:text-3xl" />
            <p className="font-bold text-lg md:text-4xl">
              PET<span className="text-primary">NEST</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex md:gap-3 gap-1 items-center">
              <Link to={"/profile"}>
                <div
                  className="flex items-center md:p-3 tooltip tooltip-left p-2 border text-dark2 border-secondary hover:text-white hover:bg-primary rounded-full"
                  data-tip="Profile"
                >
                  <FaUser />
                </div>
              </Link>

              <button className="btn btn-xs md:btn-sm  border-none text-white bg-primary hover:bg-secondary hover:text-dark2 ">
                SIGN OUT
              </button>
            </div>
          ) : (
            <div className=" flex gap-2 md:gap-4 items-center">
              <Link to={"/login"}>
                <button className="btn btn-xs md:btn-sm  border-none text-white bg-primary hover:bg-secondary hover:text-dark2 ">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="btn btn-xs md:btn-sm border-none text-white bg-primary hover:bg-secondary hover:text-dark2">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
