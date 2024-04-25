import React from "react";
import SearchInput from "./SearchInput";
import SortBtn from "./SortBtn";

export default function HomeActions({
  sortState,
  queryState,
  dict,
}: HomeActionProps) {
  const searchInput = dict.products.searchInput;
  const sortBtn = dict.products.sortBtn;

  return (
    <div className="w-full flex flex-col sm:flex-row gap-3">
      <SearchInput setQuery={queryState} data={searchInput} />
      <SortBtn sortState={sortState} data={sortBtn} />
    </div>
  );
}
