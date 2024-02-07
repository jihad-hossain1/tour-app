import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Loader from "./Loader/Loader";
import Header from "../components/Header/Nav/Header/Header"

const Layout = () => {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setLoading(false)
  //   }, 3000);
  //   // Clean up the timeout to avoid memory leaks
  //   return () => clearTimeout(timeoutId)
  // }, [])
  return (
    <>
      {/* {loading ? (<Loader />) : (<div className="text-zinc-950 bg-zinc-50 w-full min-h-screen ">
        <div className="">
          <Header />
        </div >
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div >)} */}
      <div className="">
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
