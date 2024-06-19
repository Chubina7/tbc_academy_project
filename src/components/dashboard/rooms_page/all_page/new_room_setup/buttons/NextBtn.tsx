"use client";

import { useContext } from "react";
import { AddNewRoomContext as ctx } from "../../../../../../context/ctx";

export default function NextBtn() {
  const { steps, data, isLoading } = useContext(ctx);

  if (steps.activeIdx === 3) return null;

  const condition =
    (steps.activeIdx === 0 &&
      (data.title.trim() === "" || data.description.trim() === "")) ||
    (steps.activeIdx === 1 && data.coverPicture.trim() === "") ||
    (steps.activeIdx === 2 && data.categories.length < 3);

  return (
    <button
      className="w-full px-12 py-1 rounded-xl bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
      onClick={() => {
        steps.setActiveIdx((prev) => prev + 1);
      }}
      disabled={condition || isLoading}
    >
      NEXT
    </button>
  );
}
