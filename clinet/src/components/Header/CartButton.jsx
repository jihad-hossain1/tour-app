import React, { useState } from "react";
import { Button, Menu, MenuItem, Avatar } from "@mui/material";
import { MdAddShoppingCart } from "react-icons/md";

const CartButton = () => {
  const [cartToggle, setcartToggle] = useState(null);
  const cart = Boolean(cartToggle);

  const handlecartClick = (e) => {
    setcartToggle(e.currentTarget);
  };
  const handlecartClose = () => {
    setcartToggle(null);
  };
  return (
    <div>
      <Avatar
        style={{ backgroundColor: "#fff" }}
        id="basic-button"
        aria-controls={cart ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={cart ? "true" : undefined}
        onClick={handlecartClick}
      >
        <MdAddShoppingCart className="text-zinc-900" size={25} />
      </Avatar>
      <Menu
        className="mt-4"
        id="basic-menu"
        anchorEl={cartToggle}
        open={cart}
        onClose={handlecartClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handlecartClose}>No card item</MenuItem>
      </Menu>
    </div>
  );
};

export default CartButton;
