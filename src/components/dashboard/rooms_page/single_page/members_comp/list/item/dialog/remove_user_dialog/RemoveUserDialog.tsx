import React from "react";
import Backdrop from "../../../../../../../../ui/Backdrop";
import Info from "./Info";
import CancelBtn from "./CancelBtn";
import ConfirmBtn from "./ConfirmBtn";

interface Props {
  modalHandler: () => void;
}

export default function RemoveUserDialog({ modalHandler }: Props) {
  return (
    <>
      <Backdrop modalCloser={modalHandler} />
      <div className="fixed z-50 top-[50%] left-[50%] translate translate-y-[-50%] translate-x-[-50%] rounded-xl p-3 px-5 shadow-custom bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] | w-full max-w-72 sm:max-w-md flex flex-col justify-center items-end gap-4">
        <Info />
        <div className="flex justify-center items-center gap-3">
          <CancelBtn action={modalHandler} />
          <ConfirmBtn modalHandler={modalHandler} />
        </div>
      </div>
    </>
  );
}
