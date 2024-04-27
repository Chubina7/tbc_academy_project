"use client";

import React, { useState } from "react";
// import Navigation from "./Navigation";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import NavItems from "./NavItems";
import LangChange from "./LangChange";
import ThemeChange from "./ThemeChange";
import SignOutBtn from "./SignOutBtn";

export default function Burger({ lng }: { lng: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  // on width change modal state automatically should be setted to false

  return (
    <>
      <button onClick={handleModal} className="opacity-60 hover:opacity-100">
        <TfiMenu size={26} />
      </button>

      {isOpen && (
        <div className="fixed w-full h-full left-0 top-0 bg-white dark:bg-[#25292D] p-6 z-50">
          <button
            onClick={handleModal}
            className="opacity-60 hover:opacity-100"
          >
            <IoClose size={26} />
          </button>
          {/* <Navigation closeBurgerModal={handleModal} lng={lng} dict={dict} /> */}
          <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 select-none">
            <NavItems action={handleModal} lng={lng} />
            <LangChange action={handleModal} />
            <ThemeChange action={handleModal} />
            <SignOutBtn lng={lng} />
          </ul>
        </div>
      )}
    </>
  );
}
