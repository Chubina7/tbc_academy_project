"use client";

import React, { useContext, useState } from "react";
import { BookmarkContext } from "../../providers/BookmarkProvider";

export default function AddToBookmark({ dataOfItem }: { dataOfItem: any }) {
  const { addItem, removeItem, list } = useContext(BookmarkContext);
  const itemIdx = list.findIndex(
    (item: any) => item.title === dataOfItem.title
  );
  const [isInList, setIsInList] = useState(() =>
    itemIdx === -1 ? false : true
  );

  const handleBookmarkListChange = () => {
    if (itemIdx === -1) {
      addItem(dataOfItem);
      setIsInList(true);
    } else {
      removeItem(dataOfItem);
      setIsInList(false);
    }
  };

  return (
    <button
      className="w-full rounded-md bg-[#3D52A1] text-[#EEE8F6] dark:bg-[#EEE8F6] dark:text-[#3D52A1] py-1 mt-4 hover:opacity-70"
      onClick={handleBookmarkListChange}
    >
      {isInList ? "remove from" : "add to"} bookmark
    </button>
  );
}
