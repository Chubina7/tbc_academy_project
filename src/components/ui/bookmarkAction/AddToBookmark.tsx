"use client";

import { actAddToBookmarks } from "../../../lib/actions";

export default function AddToBookmark({ id }: { id: string }) {
  return (
    <button
      className={`w-full rounded-md bg-[#3D52A1] text-[#EEE8F6] dark:text-[#2A2438] dark:bg-[#EEE8F6] py-2 mt-4 hover:opacity-70`}
      onClick={() => actAddToBookmarks(id)}
    >
      Add to bookmarks
    </button>
  );
}
