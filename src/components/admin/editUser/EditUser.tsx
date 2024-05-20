"use client";

import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import Backdrop from "../../ui/Backdrop";
import Modal from "./Modal";

export default function EditUser({ user_id }: { user_id: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <BsPencilFill size={20} cursor="pointer" onClick={handleModal} />
      {isOpen && (
        <>
          <Backdrop modalCloser={handleModal} />
          <Modal user_id={user_id} handleModal={handleModal} />
        </>
      )}
    </>
  );
}
