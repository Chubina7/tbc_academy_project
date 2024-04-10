import React from "react";
import Navigation from "./Navigation";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center bg-orange-400">
      <h1>LOGO</h1>
      <div className="hidden sm:block">
        <Navigation />
      </div>
      <div className="relative block sm:hidden">
        <BurgerMenu />
      </div>
    </header>
  );
}
