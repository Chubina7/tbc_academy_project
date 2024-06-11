"use client";

import { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import Modal from "./Modal";

export default function EditBtn() {
  const settingsModalState = useState(false);

  return (
    <>
      <IoEllipsisHorizontal
        size={24}
        className="hover:cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={() => settingsModalState[1]((prev) => !prev)}
        id="three_dots"
      />
      <div className="relative z-40">
        <Modal state={settingsModalState} />
      </div>
    </>
  );
}
