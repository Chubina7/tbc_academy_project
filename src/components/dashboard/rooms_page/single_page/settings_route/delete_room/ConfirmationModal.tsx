import React from "react";
import Backdrop from "../../../../../ui/Backdrop";
import ConfirmBtn from "./ConfirmBtn";
import CancelBtn from "./CancelBtn";
import Info from "./Info";

interface Props {
  modalHandler: () => void;
}

export default function ConfirmationModal({ modalHandler }: Props) {
  return (
    <>
      <Backdrop modalCloser={modalHandler} />
      <div className="fixed z-50 top-[50%] left-[50%] translate translate-y-[-50%] translate-x-[-50%] rounded-xl p-3 px-5 shadow-custom bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] | w-full max-w-72 sm:max-w-md flex flex-col justify-center items-start gap-4">
        <Info />
        <div className="w-full flex justify-end items-center gap-4">
          <CancelBtn modalHandler={modalHandler} />
          <ConfirmBtn />
        </div>
      </div>
    </>
  );
}
