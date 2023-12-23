import React, { useState } from "react";
import { Typography, Dialog } from "@mui/material";

const ModalAll = ({ children, title, open, setOpen }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(!open)}>
      <main className="w-[385px] md:w-[700px] px-4 py-5 no-scrollbar">
        <Typography
          className="text-center pb-10"
          id="spring-modal-title"
          variant="h6"
          component="h2"
        >
          {title}
        </Typography>
        {children}
      </main>
    </Dialog>
  );
};

export default ModalAll;
