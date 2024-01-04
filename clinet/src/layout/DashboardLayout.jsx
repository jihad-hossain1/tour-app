import { Link, Outlet, useNavigate } from "react-router-dom";
import DashNav from "../components/dashboard/Navbar/DashNav";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { FaHome } from "react-icons/fa";
import { TbWorld, TbWorldCog } from "react-icons/tb";
import { MdTour } from "react-icons/md";
import { Button } from "@mui/material";
import { GoSignOut } from "react-icons/go";
import { getClient } from "../router/ClientRoute";

const DashboardLayout = () => {
  return (
    <>
      {/* <DashNav />
      <div className="max-w-screen-xl mx-auto px-2 py-3">
        <Outlet />
      </div> */}

      <div className="bg-slate-100 text-slate-900 hidden md:flex">
        <SideNav />

        <div className="w-full">
          {/* <div className="h-[35px] m-4 rounded border border-slate-200/70 bg-slate-100 shadow-[2px_4px_10px_rgba(0,0,0,0.25)]"></div> */}
          <div className=" m-4 rounded border border-slate-50   bg-slate-100 ">
            <div className="min-h-screen max-w-screen-2xl mx-auto px-1">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 text-slate-900  md:hidden">
        <SideNav />

        <div className="w-full">
          {/* <div className="h-[35px] m-4 rounded border border-slate-200/70 bg-slate-100 shadow-[2px_4px_10px_rgba(0,0,0,0.25)]"></div> */}
          <div className="min-h-screen m-4 rounded border border-slate-50   bg-slate-100 ">
            <div className=" px-1">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SideNav = () => {
  const [selected, setSelected] = useState(0);
  const [isClient, setClient] = useState(getClient());

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("client");
    setClient(null);

    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };
  return (
    <nav className="md:min-h-screen md:w-fit bg-slate-500/20 p-4 flex flex-row md:flex-col items-center gap-2 shadow-[2px_4px_15px_rgba(0,0,0,0.25)]">
      <div>logo</div>
      <Link to={`/dashboard`}>
        <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
          <FaHome />
        </NavItem>
      </Link>
      <Link to={`/dashboard/tourSpot`}>
        <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
          <MdTour />
        </NavItem>
      </Link>
      <Link to={`/dashboard/manageContinents`}>
        <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
          <TbWorld />
        </NavItem>
      </Link>
      <NavItem>
        <button onClick={handleLogout}>
          <GoSignOut />
        </button>
      </NavItem>
    </nav>
  );
};

const NavItem = ({ children, selected, id, setSelected }) => {
  return (
    <motion.button
      className="p-3 text-xl bg-slate-50 hover:bg-slate-50 rounded-md transition-colors relative"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-md bg-indigo-100 z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DashboardLayout;
