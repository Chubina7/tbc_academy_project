import React from "react";
import SearchInput from "./SearchInput";
import SortBtn from "./SortBtn";

export default function HomeActions({ sortState, queryState }) {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-3">
      <SearchInput setQuery={queryState} />
      <SortBtn sortState={sortState} />
    </div>
  );
}
