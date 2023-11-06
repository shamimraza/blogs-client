import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
    <div className="navbar bg-red-100">
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
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{pages}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn btn-outline btn-success mr-3">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-outline btn-success">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
