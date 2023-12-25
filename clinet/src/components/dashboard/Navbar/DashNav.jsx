import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar } from "@mui/material";


const DashNav = () => {
  return (
    <div className="bg-[rgb(2,136,209)] text-zinc-50 py-6 px-4">
      <div className="max-w-screen-xl mx-auto px-2">
        <ul className="flex items-center gap-10 ">
          <li>
            <NavLink
              to={`/dashboard`}
              className={({ isActive }) => (isActive ? "text-blue-200" : "")}
            >
              Dash-Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/tourSpot`}
              className={({ isActive }) => (isActive ? "text-blue-200" : "")}
            >
              TourSpot
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashNav;
