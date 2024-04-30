import React from "react";
import Navigation from "./Navigation";
// import BurgerMenu from "./BurgerMenu";
import SignOutBtn from "./SignOutBtn";
import Logo from "./Logo";
import { RxDividerVertical } from "react-icons/rx";
import ThemeChanger from "./themeComponent/ThemeChanger";
import LangChanger from "./langComponent/LangChanger";

export default function Header() {
  return (
    <header className="fixed w-full h-16 p-4 flex justify-between items-center bg-inherit text-inherit shadow-xl z-50">
      <Logo />
      <div className="hidden sm:flex justify-center items-center">
        <Navigation />
        <RxDividerVertical size={32} opacity={"60%"} />
        <div className="h-full flex justify-center items-center gap-2 mr-3">
          <ThemeChanger />
          <LangChanger />
        </div>
        <SignOutBtn />
      </div>
      {/* <div className=" sm:hidden">
        <BurgerMenu />
      </div> */}
    </header>
  );
}
