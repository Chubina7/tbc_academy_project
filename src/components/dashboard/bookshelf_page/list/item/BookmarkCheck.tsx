"use client";

import { useContext } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { BookmarkContext as ctx } from "../../../../../context/ctx";

interface Props {
  book_id: string;
}

export default function BookmarkCheck({ book_id }: Props) {
  const states = useContext(ctx);
  const { addToBookmark, removeFromBookmark } = states.actions;
  const { includes } = states.properties;

  const handleBookmarking = () => {
    if (includes(book_id)) {
      removeFromBookmark(book_id);
    } else {
      addToBookmark(book_id);
    }
  };

  return (
    <span
      className="absolute right-3 top-3 cursor-pointer opacity-80"
      onClick={handleBookmarking}
    >
      {includes(book_id) ? (
        <IoBookmark size={28} />
      ) : (
        <IoBookmarkOutline size={28} />
      )}
    </span>
  );
}
