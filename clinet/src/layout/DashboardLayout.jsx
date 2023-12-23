import React from "react";
import { Outlet } from "react-router-dom";
import DashNav from "../components/dashboard/Navbar/DashNav";

const DashboardLayout = () => {
  return (
    <div>
      <DashNav />
      <div className="max-w-screen-xl mx-auto px-2 py-3">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
