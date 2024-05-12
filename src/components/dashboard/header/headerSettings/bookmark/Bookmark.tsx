"use client";

import Link from "next/link";
import React from "react";
import { IoBookmark } from "react-icons/io5";
import dynamic from "next/dynamic";
// import { IoBookmarkOutline } from "react-icons/io5";
const BookmarkNum = dynamic(() => import("./BookmarkNum"), {
  ssr: false,
});

export default function Bookmark() {
  return (
    <div className="relative">
      <Link href={"/dashboard/bookmarks"}>
        <IoBookmark size={21} />
        {/* <IoBookmarkOutline size={20} /> */}
      </Link>
      <BookmarkNum />
    </div>
  );
}
