"use client";

import React, { useState } from "react";
// import Navigation from "./Navigation";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

export default function Burger({ lng }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  // on width change modal state automatically should be setted to false

  return (
    <>
      <button onClick={handleModal} className="opacity-60 hover:opacity-100">
        <TfiMenu size={26} />
      </button>

      {isOpen && (
        <div className="fixed w-full h-full left-0 top-0 bg-[#25292D] p-6 z-50">
          <button
            onClick={handleModal}
            className="opacity-60 hover:opacity-100"
          >
            <IoClose size={26} />
          </button>
          {/* <Navigation closeBurgerModal={handleModal} lng={lng} /> */}
        </div>
      )}
    </>
  );
}
