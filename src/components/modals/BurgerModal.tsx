import React from "react";
import LangChange from "../header/langComponent/LangChange";
import SignOutBtn from "../header/SignOutBtn";
import { IoClose } from "react-icons/io5";
import Navigation from "../header/Navigation";
// import ThemeChanger from "../header/themeComponent/ThemeChanger";

function BurgerModal({ modalStateHandler }: { modalStateHandler: () => void }) {
  return (
    <div className="fixed w-full h-full left-0 top-0 bg-white dark:bg-[#25292D] p-6 z-50">
      <button
        onClick={modalStateHandler}
        className="opacity-60 hover:opacity-100"
      >
        <IoClose size={26} />
      </button>
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 select-none">
        <Navigation />
        <LangChange />
        {/* <ThemeChanger /> */}
        <SignOutBtn />
      </ul>
    </div>
  );
}

export default BurgerModal;
