"use client";

import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Modal from "./Modal";
import Backdrop from "../../ui/Backdrop";

export default function RemoveUser({ user_id }: { user_id: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <MdDelete size={20} cursor="pointer" onClick={handleModal} />
      {isOpen && (
        <>
          <Backdrop modalCloser={handleModal} />
          <Modal user_id={user_id} handleModal={handleModal} />
        </>
      )}
    </>
  );
}
