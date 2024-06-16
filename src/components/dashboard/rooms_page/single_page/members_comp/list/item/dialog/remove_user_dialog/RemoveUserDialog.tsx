import React from "react";
import Backdrop from "../../../../../../../../ui/Backdrop";
import Info from "./Info";
import CancelBtn from "./CancelBtn";
import ConfirmBtn from "./ConfirmBtn";

interface Props {
  modalHandler: () => void;
  data: {
    user_id: string;
    room_id: string;
    username: string;
    surname: string | null;
  };
}

export default function RemoveUserDialog({ modalHandler, data }: Props) {
  return (
    <>
      <Backdrop modalCloser={modalHandler} />
      <div className="fixed z-50 top-[50%] left-[50%] translate translate-y-[-50%] translate-x-[-50%] rounded-xl p-3 px-5 shadow-custom bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] | w-full max-w-72 sm:max-w-md flex flex-col justify-center items-end gap-4">
        <Info username={data.username} surname={data.surname} />
        <div className="flex justify-center items-center gap-3">
          <CancelBtn action={modalHandler} />
          <ConfirmBtn
            modalHandler={modalHandler}
            user_id={data.user_id}
            room_id={data.room_id}
          />
        </div>
      </div>
    </>
  );
}
