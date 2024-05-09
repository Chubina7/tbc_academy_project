"use client";

import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Modal from "./Modal";
import Backdrop from "../../ui/Backdrop";

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
          <Backdrop modalCloser={handleModal} />
          <Modal userId={id} handleModal={handleModal} />
        </>
      )}
    </>
  );
}
