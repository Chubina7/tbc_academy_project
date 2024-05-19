"use client";

import { actResetBookmarks } from "../../../lib/actions";

export default function DeleteBookmarks() {
  const handleDeleteBookmarks = () => {
    actResetBookmarks();
  };

  return (
    <button
      className="border border-gray-300 p-2 rounded-lg"
      onClick={handleDeleteBookmarks}
    >
      RESET
    </button>
  );
}
