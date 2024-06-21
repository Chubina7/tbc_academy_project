"use client";

import { useState } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

export default function BookmarkCheck() {
  const [isInBookmark, setIsInBookmark] = useState(false);

  const handleBookmarking = () => setIsInBookmark((prev) => !prev);

  return (
    <span
      className="absolute right-3 -top-[4px] cursor-pointer opacity-80"
      onClick={handleBookmarking}
    >
      {isInBookmark ? (
        <IoBookmark size={32} />
      ) : (
        <IoBookmarkOutline size={32} />
      )}
    </span>
  );
}
