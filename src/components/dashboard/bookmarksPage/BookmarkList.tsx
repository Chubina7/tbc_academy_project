"use client";

import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { BookmarkContext } from "../../../context/ctx";
const List = dynamic(() => import("./List"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

interface Bookmarks {
  title: string;
  description: string;
  count: number;
}

interface ArrBookmarks {
  bookmarks: Bookmarks[];
}

export default function BookmarkList({ bookmarks }: ArrBookmarks) {
  const { list, removeItem, resetList } = useContext(BookmarkContext);

  return (
    <div className="flex flex-col">
      <button onClick={resetList}>RESET</button>
      <List data={bookmarks} action={removeItem} />
    </div>
  );
}
