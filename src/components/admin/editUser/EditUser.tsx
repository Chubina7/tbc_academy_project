"use client";

import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import Backdrop from "../../ui/Backdrop";
import Modal from "./Modal";

export default function EditUser({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <BsPencilFill size={20} cursor="pointer" onClick={handleModal} />
      {isOpen && (
        <>
          <Backdrop modalCloser={handleModal} />
          <Modal userId={id} handleModal={handleModal} />
        </>
      )}
    </>
  );
}
