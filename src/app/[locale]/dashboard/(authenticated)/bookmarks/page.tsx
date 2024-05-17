import React from "react";
import Bookmarks from "../../../../../components/dashboard/Bookmarks/Bookmarks";
import { getAllBookmarks } from "../../../../../lib/helpers";

export default async function page() {
  const data = await getAllBookmarks();
  return (
    <div className="w-full">
      <Bookmarks bookmarks={data} />
    </div>
  );
}
