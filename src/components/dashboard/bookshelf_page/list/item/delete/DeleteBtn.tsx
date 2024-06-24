"use client";

import { IoTrash } from "react-icons/io5";

interface Props {
  book_id: string;
}

export default function DeleteBtn({ book_id }: Props) {
  const handleDeletion = () => {};

  return (
    <IoTrash
      size={24}
      className="absolute text-red-600 right-3 bottom-5 cursor-pointer opacity-80 z-40"
      onClick={handleDeletion}
    />
  );
}
