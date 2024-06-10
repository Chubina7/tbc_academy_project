import React from "react";
import Backdrop from "../../../../ui/Backdrop";
import BottomToTop from "../../../../ui/framerMotionDivs/directions/BottomToTop";

interface Props {
  modalHandler: () => void;
}

export default function Modal({ modalHandler }: Props) {
  return (
    <>
      <Backdrop modalCloser={modalHandler} />
      <BottomToTop className="fixed top-12 rounded-t-xl left-0 w-full h-full z-50 bg-[#FFFFFF] dark:bg-[#352F44] p-3 pb-16 flex">
        <h1>test</h1>
      </BottomToTop>
    </>
  );
}
