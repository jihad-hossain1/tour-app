import React, { useState } from "react";
import LanguageButton from "./LanguageButton";
import CartButton from "./CartButton";
import LoginCard from "./LoginCard";

const ExtraButton = () => {
  return (
    <main className="flex items-center gap-4">
      <LanguageButton />
      <LoginCard />
      <CartButton />
    </main>
  );
};

export default ExtraButton;
