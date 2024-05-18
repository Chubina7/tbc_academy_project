// DeleteBookmarks.tsx
"use client";
import { actDeleteBookmarks } from "../../../lib/actions";

export default function DeleteBookmarks() {
  const handleDeleteBookmarks = () => {
    actDeleteBookmarks();
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
