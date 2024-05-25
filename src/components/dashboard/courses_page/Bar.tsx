import React from "react";
import RtoL from "../../ui/framerMotionDivs/directions/RtoL";

export default function Bar() {
  return (
    <div className="w-full flex justify-end items-center">
      <RtoL>
        <button className="bg-red-400 rounded-lg p-2">ADD</button>
      </RtoL>
    </div>
  );
}
