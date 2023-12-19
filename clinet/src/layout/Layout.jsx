import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="text-zinc-950 bg-zinc-50 w-full min-h-screen ">
      <div className="fixed z-50 w-full">
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
