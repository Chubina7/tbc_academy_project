"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";

export default function AddBtn() {
  const { handleCtgAdd, inputValue } = useContext(ctx);

  return (
    <button
      className="border-2 border-[#603CFF] dark:border-[#5C5470] text-[#603CFF] dark:text-[#DBD8E3] transition-all duration-300 rounded-lg px-3 py-1"
      onClick={() => handleCtgAdd(inputValue)}
    >
      Add
    </button>
  );
}
