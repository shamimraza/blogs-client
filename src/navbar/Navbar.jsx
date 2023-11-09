import { Link, NavLink } from "react-router-dom";
import navImage from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import logoImage from "../assets/icons8-blogs-64.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const pages = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addBlog"> Add Blog</NavLink>
      </li>
      <li>
        <NavLink to="/allBlogs">All Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/featured">Featured Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/wishlist">Wishlist</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {pages}
          </ul>
        </div>
        <Link>
          <img className="w-14 h-14" src={logoImage} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{pages}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar"></label>
        <div className="ml-2 ">
          {user ? (
            <>
              <div className="flex">
                <div className="mr-3">
                  <img
                    className="rounded-full w-10  "
                    src={user?.photoURL || navImage}
                  />
                </div>
                <button onClick={handleSignOut} className="btn">
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <Link className="hidden lg:block" to="/login">
              <button className="btn btn-outline btn-accent">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
