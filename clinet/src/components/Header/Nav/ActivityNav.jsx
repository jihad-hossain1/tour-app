import { MenuItem, Menu } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { activity } from "../navData";

const ActivityNav = () => {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <div>
      <button
        style={{ color: "#fff" }}
        id={"btn-basic"}
        aria-controls={open ? "area-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {activity?.category}
      </button>
      <Menu
        className="flex flex-col mt-5"
        id={"btn-basic"}
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "area-menu",
        }}
      >
        {activity?.navlist?.map(({ path, label }, _i) => (
          <MenuItem key={_i} onClick={handleClose}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-600" : "")}
              to={`${path}`}
            >
              {label}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ActivityNav;
