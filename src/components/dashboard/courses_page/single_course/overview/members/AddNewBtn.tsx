import React from "react";
import BottomToTop from "../../../../../ui/framerMotionDivs/directions/BottomToTop";

export default function AddNewBtn() {
  return (
    <BottomToTop delay={1.7} className="absolute bottom-0 right-0 w-full p-3">
      <button className="w-full rounded-xl py-1 bg-[#5C5470]">Add new</button>
    </BottomToTop>
  );
}
