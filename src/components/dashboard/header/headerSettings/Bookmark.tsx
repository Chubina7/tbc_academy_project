"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { IoBookmark } from "react-icons/io5";
import { BookmarkContext } from "../../../../providers/BookmarkProvider";
// import { IoBookmarkOutline } from "react-icons/io5";

export default function Bookmark() {
  const { list } = useContext(BookmarkContext);

  console.log(list);

  return (
    <div className="relative">
      <Link href={"/dashboard/bookmarks"}>
        <IoBookmark size={21} />
        {/* <IoBookmarkOutline size={20} /> */}
      </Link>
      <p className="absolute top-0 left-0 flex justify-center items-center | bg-red-400 | text-xs font-bold px-1 py-px rounded-full translate-x-3 -translate-y-2 cursor-default">
        {list.length}
      </p>
    </div>
  );
}
