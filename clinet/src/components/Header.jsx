import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-center py-3 bg-zinc-800">
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            to={`/`}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            to={`/clients`}
          >
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            to={`/projects`}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
