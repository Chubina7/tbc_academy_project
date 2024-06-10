import React from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  action: () => void;
}

export default function Close({ action }: Props) {
  return (
    <div
      className="absolute right-4 top-5 cursor-pointer flex gap-2 justify-center items-center"
      onClick={action}
    >
      <IoClose size={28} />
      <p className="hidden sm:block font-bold text-lg">Close</p>
    </div>
  );
}
