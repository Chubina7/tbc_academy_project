import React from "react";

export default function SortBtn({ sortState }) {
  const { sortRule, setSortRule } = sortState;

  return (
    <button
      className="text-nowrap bg-slate-400 rounded-full px-6 py-2"
      onClick={() => {
        setSortRule((prev) => !prev);
      }}
    >
      {sortRule ? "Unsort" : "Sort by price"}
    </button>
  );
}
