import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  return (
    <div className="font-poppins overflow-x-hidden">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="max-w-6xl mx-auto lg:min-h-[calc(100vh-288px)] md:lg:min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
