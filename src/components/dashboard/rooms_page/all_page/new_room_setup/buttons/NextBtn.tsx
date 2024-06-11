"use client";

import { useContext } from "react";
import { AddNewRoomContext as ctx } from "../../../../../../context/ctx";

export default function NextBtn() {
  const { steps } = useContext(ctx);

  if (steps.activeIdx === 3) return null;

  return (
    <button
      className={`w-full px-12 py-1 rounded-xl bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] transition-all duration-300`}
      onClick={() => {
        steps.setActiveIdx((prev) => prev + 1);
      }}
    >
      NEXT
    </button>
  );
}
