"use client";

import { useContext } from "react";
import { AddNewRoomContext } from "../../../../../../context/ctx";

export default function PrevBtn() {
  const { activeIdx, setActiveIdx } = useContext(AddNewRoomContext);

  const condition = activeIdx === 0;

  const onClickAction = () => {
    if (condition) return;
    setActiveIdx((prev) => prev - 1);
  };

  return (
    <button
      className={`w-full px-12 py-1 rounded-xl bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] transition-all duration-300 ${
        condition ? "hidden" : "opacity-100 cursor-pointer hover:scale-105"
      }`}
      onClick={onClickAction}
    >
      PREVIOUS
    </button>
  );
}
