import React, { useState } from "react";
import LanguageButton from "./LanguageButton";
import CartButton from "./CartButton";
import LoginCard from "./LoginCard";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ExtraButton = () => {
  return (
    <main className="flex items-center gap-4">
      <LanguageButton />
      <LoginCard />
      <CartButton />
      <Link to={"#"}>
        <Button color="info" variant="contained">
          Become a host
        </Button>
      </Link>
    </main>
  );
};

export default ExtraButton;
