import { FaPaw } from "react-icons/fa";
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
  //   const handleSignOut = () => {
  //     logOut();
  //   };

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
            <div className="flex md:gap-4 gap-1 items-center">
              <div className="dropdown dropdown-end">
                <img
                  className="md:w-12 md:h-12 h-6 w-6 rounded-full"
                  src={user.photoURL}
                  role="button"
                  tabIndex={0}
                  id="image-hover"
                  alt=""
                />
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <NavLink
                      to={"/create-assignments"}
                      className={({ isActive }) =>
                        isActive ? "active" : "hover:bg-secondary"
                      }
                    >
                      Create Assignments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/my-assignments"}
                      className={({ isActive }) =>
                        isActive ? "active" : "hover:bg-secondary"
                      }
                    >
                      My Attempted Assignments
                    </NavLink>
                  </li>
                </ul>
              </div>

              <button
                // onClick={handleSignOut}
                className="btn btn-sm md:h-12 bg-primary text-white md:w-24"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="md:space-x-4 flex items-center">
              <button className="btn btn-xs md:h-12 bg-primary text-white md:w-24">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="btn btn-xs md:h-12 bg-primary text-white md:w-24">
                <Link to={"/register"}>Register</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
