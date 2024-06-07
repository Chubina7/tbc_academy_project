import React from "react";
import Backdrop from "../../../../../../../ui/Backdrop";

interface Props {
  modalHandler: () => void;
}

export default function RemoveUserDialog({ modalHandler }: Props) {
  return (
    <>
      <Backdrop modalCloser={modalHandler} />
      <div className="fixed z-50 top-[50%] left-[50%] translate translate-y-[-50%] translate-x-[-50%] rounded-xl p-3 shadow-custom bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] | w-96 h-48">
        <h1>Remove user dialog</h1>
        <button onClick={modalHandler}>close</button>
      </div>
    </>
  );
}
