import React from "react";
import { buttonUI } from "../../../lib/styles";

export default function SortBtn({ sortState }) {
  const { sortRule, setSortRule } = sortState;

  const clickHandler = () => setSortRule((prev) => !prev);

  return (
    <button
      className={`sm:min-w-36 nowrap px-6 py-2 ${buttonUI} z-40 bg-[#F25050]`}
      onClick={clickHandler}
    >
      {sortRule ? "Unsort" : "Sort by price"}
    </button>
  );
}
