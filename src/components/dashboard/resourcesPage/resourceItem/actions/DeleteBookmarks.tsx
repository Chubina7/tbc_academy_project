"use client";

import { actResetBookmarks } from "../../../../../lib/actions";

export default function DeleteBookmarks() {
  return (
    <button
      className="border border-gray-300 p-2 rounded-lg"
      onClick={() => actResetBookmarks()}
    >
      RESET
    </button>
  );
}
