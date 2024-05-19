import React from "react";
import BookmarkNum from "./BookmarkNum";
import BookmarkRoute from "./BookmarkRoute";

export default function Bookmark() {
  return (
    <div className="relative">
      <BookmarkRoute />
      <BookmarkNum />
    </div>
  );
}
