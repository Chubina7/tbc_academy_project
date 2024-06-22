"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";

export default function ResetBtn() {
  const { handleReset } = useContext(ctx);

  return (
    <button className="px-3 py-1 rounded-lg border-2 border-[#603CFF] dark:border-[#5C5470] text-[#603CFF] dark:text-[#DBD8E3] transition-all duration-300" onClick={handleReset}>
      RESET
    </button>
  );
}
