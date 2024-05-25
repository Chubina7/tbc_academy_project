"use client";

import { actResetBookmarks } from "../../../../../lib/actions";
import Appear from "../../../../ui/framerMotionDivs/Appear";

export default function DeleteBookmarks() {
  return (
    <Appear delay={1.5}>
      <button
        className="border border-gray-300 p-2 rounded-lg"
        onClick={() => actResetBookmarks()}
      >
        RESET
      </button>
    </Appear>
  );
}
