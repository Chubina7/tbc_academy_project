"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";

export default function AddBtn() {
  const { handleCtgAdd, inputValue } = useContext(ctx);

  return (
    <button
      className="bg-red-300 rounded-lg px-3 py-1"
      onClick={() => handleCtgAdd(inputValue)}
    >
      Add
    </button>
  );
}
