import React from "react";
import { actDeleteUser } from "../../../lib/actions";

interface Props {
  handleModal: () => void;
  userId: string;
}

export default function Modal({ handleModal, userId }: Props) {
  return (
    <form
      className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-5 bg-white text-[#2B3674] rounded-xl p-5 z-50"
      action={() => {
        actDeleteUser(userId);
        handleModal();
      }}
    >
      <h1>Do you really want to delete user?</h1>
      <div className="flex justify-center items-center gap-8">
        <button className="text-white bg-red-700 px-4 py-1 rounded-xl">
          Yes
        </button>
        <span
          className="px-4 py-1 rounded-xl cursor-pointer"
          onClick={handleModal}
        >
          No
        </span>
      </div>
    </form>
  );
}
