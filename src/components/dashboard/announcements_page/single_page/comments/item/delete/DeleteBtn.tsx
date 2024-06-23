"use client";

import { useState } from "react";
import { IoTrash } from "react-icons/io5";
import ConfirmModal from "./ConfirmModal";

interface Props {
  idToDelete: string;
}

export default function DeleteBtn({ idToDelete }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <div className="">
      <IoTrash
        size={20}
        className="text-red-600 cursor-pointer"
        onClick={handleModal}
      />
      {isOpen && (
        <ConfirmModal modalHandler={handleModal} idToDelete={idToDelete} />
      )}
    </div>
  );
}
