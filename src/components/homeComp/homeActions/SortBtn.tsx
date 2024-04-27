import React from "react";
import { buttonUI } from "../../../lib/styles";

export default function SortBtn({ sortState }: { sortState: SortStateType }) {
  // const { sort, unSort } = products.sortbtn;
  const { sortRule, setSortRule } = sortState;

  const clickHandler = () => setSortRule((prev) => !prev);

  return (
    <button
      className={`sm:min-w-60 nowrap px-6 py-2 ${buttonUI} z-40 bg-[#F25050]`}
      onClick={clickHandler}
    >
      {sortRule ? "products.sortBtn.unSort" : "products.sortBtn.sort"}
    </button>
  );
}
