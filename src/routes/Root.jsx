import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="max-w-6xl mx-auto min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
