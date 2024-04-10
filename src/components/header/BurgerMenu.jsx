"use client";

import React, { useState } from "react";
import Navigation from "./Navigation";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  // on width change modal state automatically should be setted to false

  return (
    <>
      <button onClick={handleModal}>BRGR</button>

      {isOpen && (
        <div className="fixed w-full h-full left-0 top-0 bg-slate-500 p-6 z-50">
          <button onClick={handleModal}>X</button>
          <Navigation closeBurgerModal={handleModal} />
        </div>
      )}
    </>
  );
}
