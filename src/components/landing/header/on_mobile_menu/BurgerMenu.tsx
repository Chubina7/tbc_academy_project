"use client";

import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import BurgerModal from "./BurgerModal";

export default function Burger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  // on width change modal state automatically should be setted to false

  return (
    <div className="relative  h-full justify-center items-center">
      <button onClick={handleModal} className="opacity-60 hover:opacity-100">
        <TfiMenu size={26} />
      </button>
      {isOpen && <BurgerModal modalStateHandler={handleModal} />}
    </div>
  );
}
