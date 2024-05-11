"use client";

import React, { useContext, useState } from "react";
import { BookmarkContext } from "../../providers/BookmarkProvider";

export default function AddToBookmark({ dataOfItem }: { dataOfItem: any }) {
  const { addItem, removeItem } = useContext(BookmarkContext);
  const [isStored, setIsStored] = useState(false);

  const handleBookmarkListChange = () => {
    setIsStored((prev) => !prev);
    if (!isStored) {
      addItem(dataOfItem);
    } else {
      removeItem(dataOfItem);
    }
  };

  return (
    <button
      className="w-full rounded-md bg-[#3D52A1] text-[#EEE8F6] dark:bg-[#EEE8F6] dark:text-[#3D52A1] py-1 mt-4 hover:opacity-70"
      onClick={handleBookmarkListChange}
    >
      {isStored ? "remove" : "add to"} bookmark
    </button>
  );
}
