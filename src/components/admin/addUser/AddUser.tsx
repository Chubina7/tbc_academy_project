"use client";

import React, { useState } from "react";
import Backdrop from "../../ui/Backdrop";
import Modal from "./Modal";

export default function AddUser() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div
        className="flex gap-3 justify-center items-center bg-[#2B3674] text-[#F4F7FF] opacity-60 hover:opacity-100 rounded-full px-3 cursor-pointer"
        onClick={handleModal}
      >
        <p className="font-bold text-3xl">+</p>
        <p>Add user</p>
      </div>

      {isOpen && (
        <>
          <Backdrop modalCloser={handleModal} />
          <Modal handleModal={handleModal} />
        </>
      )}
    </>
  );
}
