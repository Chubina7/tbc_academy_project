"use client";

import { useContext } from "react";
import { AddNewRoomContext } from "../../../../../../context/ctx";

export default function PrevBtn() {
  const { steps, isLoading } = useContext(AddNewRoomContext);

  const condition = steps.activeIdx === 0 || isLoading;

  const onClickAction = () => {
    if (condition) return;
    steps.setActiveIdx((prev) => prev - 1);
  };

  return (
    <button
      className={`w-full px-12 py-1 rounded-xl bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] transition-all duration-300 opacity-100 cursor-pointer hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100`}
      onClick={onClickAction}
      disabled={condition}
    >
      PREVIOUS
    </button>
  );
}
