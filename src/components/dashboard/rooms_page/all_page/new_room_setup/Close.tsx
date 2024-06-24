"use client";

import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { AddNewRoomContext as ctx } from "../../../../../context/ctx";

interface Props {
  action: () => void;
}

export default function Close({ action }: Props) {
  const { data, isLoading } = useContext(ctx);
  const { categories, coverPicture, description, members, title } = data;

  const handleClose = () => {
    if (
      categories.length !== 0 ||
      !coverPicture ||
      description.trim() !== "" ||
      members.length !== 0 ||
      title.trim() !== ""
    ) {
      const answer = confirm(
        "Inserted data will be lost. Do you really want to cancel?"
      );
      if (answer) action();
      return;
    }
    action();
  };

  return (
    <button
      className="absolute right-4 top-5 cursor-pointer flex gap-2 justify-center items-center disabled:opacity-30"
      onClick={handleClose}
      disabled={isLoading}
    >
      <IoClose size={28} />
      <p className="hidden sm:block font-bold text-lg">Close</p>
    </button>
  );
}
