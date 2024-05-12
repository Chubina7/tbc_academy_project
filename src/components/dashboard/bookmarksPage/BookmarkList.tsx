"use client";

import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { BookmarkContext } from "../../../context/ctx";
const List = dynamic(() => import("./List"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function BookmarkList() {
  const { list, removeItem, resetList } = useContext(BookmarkContext);

  return (
    <div className="flex flex-col">
      <button onClick={resetList}>RESET</button>
      <List data={list} action={removeItem} />
    </div>
  );
}
