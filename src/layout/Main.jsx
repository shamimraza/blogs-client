import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <Navbar></Navbar>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
