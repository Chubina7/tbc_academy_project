import React from "react";
import { buttonUI } from "../../../lib/styles";

interface Props {
  sortState: SortStateType;
  dict: {
    sort: string;
    unSort: string;
  };
}

export default function SortBtn({ sortState, dict }: Props) {
  const { sort, unSort } = dict;
  const { sortRule, setSortRule } = sortState;

  const clickHandler = () => setSortRule((prev) => !prev);

  return (
    <button
      className={`sm:min-w-60 nowrap px-6 py-2 ${buttonUI} z-40 bg-[#F25050]`}
      onClick={clickHandler}
    >
      {sortRule ? unSort : sort}
    </button>
  );
}
