"use client";

import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

export default function DeleteBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        className="h-fit px-3 py-1 rounded-lg bg-red-600 text-white select-none"
        onClick={handleModal}
      >
        DELETE
      </button>
      {isOpen && <ConfirmationModal modalHandler={handleModal} />}
    </>
  );
}
