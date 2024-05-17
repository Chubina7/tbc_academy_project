import React from "react";
import BookmarkList from "../../../../../components/dashboard/bookmarksPage/BookmarkList";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/get-bookmark-list");
  const data = await res.json();
  console.log(data);
  return (
    <div className="w-full">
      <BookmarkList bookmarks={data.bookmarks} />
    </div>
  );
}
