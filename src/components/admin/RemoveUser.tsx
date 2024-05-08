"use client";

import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { removeUser } from "../../lib/helpers";

interface Props {
  id: string;
  // setUsers: React.Dispatch<React.SetStateAction<IUserPublics[]>>;
}

export default function RemoveUser({ id }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <MdDelete size={20} cursor="pointer" onClick={handleModal} />
      {isOpen && (
        <>
          <div
            className="fixed w-full h-full top-0 left-0 opacity-50 bg-black z-50"
            onClick={handleModal}
          />
          <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-5 bg-white text-[#2B3674] rounded-xl p-5 z-50">
            <h1>Do you really want to delete user?</h1>
            <div className="flex justify-center items-center gap-8">
              <button
                className="text-white bg-red-700 px-4 py-1 rounded-xl"
                onClick={() => {
                  // setUsers((prev) => {
                  //   const list = [...prev];
                  //   const item = list.find((item) => item.user_id === id);
                  //   if (item) {
                  //     const toDelete = list.indexOf(item);
                  //     list.splice(toDelete, 1);
                  //     return list;
                  //   }
                  //   return [...prev];
                  // });
                  removeUser(id);
                  setIsOpen((prev) => !prev);
                }}
              >
                Yes
              </button>
              <button className="px-4 py-1 rounded-xl" onClick={handleModal}>
                No
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
