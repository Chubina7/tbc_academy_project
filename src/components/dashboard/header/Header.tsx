import React from "react";
import InfoAboutPage from "./infoAboutPage/InfoAboutPage";
import HeaderNav from "./headerNav/HeaderNav";

function Header() {
  return (
    <header className="w-full flex justify-between items-center p-3 rounded-xl">
      <InfoAboutPage />
      <HeaderNav />
    </header>
  );
}

export default Header;
