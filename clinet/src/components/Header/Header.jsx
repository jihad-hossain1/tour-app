import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuItem, Menu, Button } from "@mui/material";
import { navData } from "./navData";
import ExtraButton from "./ExtraButton";

const Header = () => {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <main className="flex justify-between items-center px-5 py-3 bg-zinc-800/50 bg-opacity-30">
      {/* logo section  */}
      <div className="w-fit text-[#fff]">Traveler</div>
      {/* navlist  */}
      <nav className="flex items-center gap">
        {navData.map(({ category, btn, navlist, area }, _ind) => (
          <>
            <Button
              style={{ color: "#fff" }}
              id={btn}
              aria-controls={open ? area : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <span>{category}</span>
            </Button>
            <Menu
              className="flex flex-col"
              id={btn}
              anchorEl={anchor}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": area,
              }}
            >
              {navlist.map(({ label, path }, _i) => (
                <MenuItem key={_i} onClick={handleClose}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-orange-600" : ""
                    }
                    to={`${path}`}
                  >
                    {label}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </>
        ))}
      </nav>
      {/* extra section  */}
      <div>
        <ExtraButton />
      </div>
    </main>
  );
};

export default Header;
