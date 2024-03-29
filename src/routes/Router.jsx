import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import Wishlist from "../pages/Wishlist";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import Details from "../pages/Details";
import Prived from "./Prived";
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
        element: (
          <Prived>
            <AddBlog></AddBlog>
          </Prived>
        ),
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
        loader: ({ params }) =>
          fetch(
            `https://my-blogs-server.vercel.app/api/v1/blog/${params.category}`
          ),
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
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://my-blogs-server.vercel.app/api/v1/category/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
