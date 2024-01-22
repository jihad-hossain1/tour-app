import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Header2 from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import Header3 from "../components/Header/Nav/Header/Header3";

const Layout = () => {
  return (
    <div className="text-zinc-950 bg-zinc-50 w-full min-h-screen ">
      <div className="fixed z-50 w-full">
        {/* <Header /> */}
        {/* <Header2 /> */}
        <Header3></Header3>
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
