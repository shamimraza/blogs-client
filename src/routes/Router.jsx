import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import Wishlist from "../pages/Wishlist";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBlog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/featured",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
