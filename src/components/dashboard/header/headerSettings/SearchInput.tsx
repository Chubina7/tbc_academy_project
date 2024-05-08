import React from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchInput() {
  return (
    <div className="relative rounded-full overflow-hidden text-sm">
      <IoSearch
        className="absolute left-0 top-2/4 translate-x-1/2 -translate-y-1/2 opacity-50"
        size={20}
      />
      <input
        type="search"
        placeholder="Search"
        className="bg-[#F4F7FF] text-inherit placeholder:text-inherit placeholder:opacity-50 | w-full h-full p-2 pl-10 outline-none"
      />
    </div>
  );
}