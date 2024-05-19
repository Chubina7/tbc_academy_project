"use client";

import Link from "next/link";
import React from "react";
import { IoBookmark } from "react-icons/io5";
import { usePathname } from "next/navigation";
import BookmarkNum from "./BookmarkNum";
// import { IoBookmarkOutline } from "react-icons/io5";

export default function Bookmark() {
  const path = usePathname();
  return (
    <div className="relative">
      <Link href={"/dashboard/bookmarks"}>
        <IoBookmark
          size={21}
          color="inherit"
          className={`transition-all duration-300 hover:opacity-100 ${
            path === "/dashboard/bookmarks" ? "opacity-100 " : "opacity-60 "
          }`}
        />
      </Link>
      <BookmarkNum />
    </div>
  );
}
