"use client";

import { IoTrash } from "react-icons/io5";
import Modal from "./Modal";
import { useState } from "react";

interface Props {
  book_id: string;
}

export default function DeleteBtn({ book_id }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <IoTrash
        size={24}
        className=" text-red-600 cursor-pointer opacity-80"
        onClick={handleModal}
      />
      {isOpen && <Modal handleModal={handleModal} book_id={book_id} />}
    </>
  );
}
