"use client";

import React, { useContext, useState } from "react";
import dynamic from "next/dynamic";
import { BookmarkContext } from "../../../context/ctx";
import { actAddToBookmarks } from "../../../lib/actions";
const Title = dynamic(() => import("./Title"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function AddToBookmark({ dataOfItem }: { dataOfItem: any }) {
  const { addItem, removeItem, list } = useContext(BookmarkContext);
  const itemIdx = list
    ? list.findIndex((item: any) => item.title === dataOfItem.title)
    : -1;
  const [isInList, setIsInList] = useState(() =>
    itemIdx === -1 ? false : true
  );

  const handleBookmarkListChange = () => {
    if (itemIdx === -1) {
      addItem(dataOfItem);
      actAddToBookmarks();
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
      <Title title={isInList} />
    </button>
  );
}
