"use client";

import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import ConfirmModal from "./ConfirmModal";

interface Props {
  announcement_id: string;
}

export default function DeleteBtn({ announcement_id }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="w-full flex justify-end">
        <button onClick={modalHandler}>
          <IoTrashOutline size={20} color="red" />
        </button>
        {isOpen && (
          <ConfirmModal
            handleModal={modalHandler}
            idToDelete={announcement_id}
          />
        )}
      </div>
    </>
  );
}
