import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Header2 from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import Loader from "./Loader/Loader";

const Layout = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 3000);
    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <>
      {loading ? (<Loader />) : (<div className="text-zinc-950 bg-zinc-50 w-full min-h-screen ">
        <div className="fixed z-50 w-full">
          {/* <Header /> */}
          <Header2 />
        </div >
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div >)}
    </>
  );
};

export default Layout;
