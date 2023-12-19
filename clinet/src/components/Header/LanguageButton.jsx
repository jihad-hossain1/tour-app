import React, { useState } from "react";
import { MenuItem, Menu, Button } from "@mui/material";

const LanguageButton = () => {
  const [langToggle, setLangToggle] = useState(null);
  const lang = Boolean(langToggle);

  const handleLangClick = (e) => {
    setLangToggle(e.currentTarget);
  };
  const handleLangClose = () => {
    setLangToggle(null);
  };
  return (
    <main>
      <Button
        style={{ color: "#fff" }}
        id={"btn-6"}
        aria-controls={lang ? "area-6" : undefined}
        aria-haspopup="true"
        aria-expanded={lang ? "true" : undefined}
        onClick={handleLangClick}
      >
        Language
      </Button>
      <Menu
        id={"btn-6"}
        anchorEl={langToggle}
        open={lang}
        onClose={handleLangClose}
        MenuListProps={{
          "aria-labelledby": "area-6",
        }}
      >
        <MenuItem onClick={handleLangClose}>Bangla</MenuItem>
        <MenuItem onClick={handleLangClose}>Hindi</MenuItem>
        <MenuItem onClick={handleLangClose}>English</MenuItem>
      </Menu>
    </main>
  );
};

export default LanguageButton;
