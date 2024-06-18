"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";

export default function ResetBtn() {
  const { handleReset } = useContext(ctx);

  return (
    <button className="px-3 py-1 rounded-lg bg-green-400" onClick={handleReset}>
      ResetBtn
    </button>
  );
}
