"use client";

import { useState } from "react";
import AddBtn from "../../../../../ui/AddBtn";
import Modal from "./Modal";

interface Props {
  room_id: string;
}

export default function Btn({ room_id }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <AddBtn onClickAct={handleModal} />
      {isOpen && <Modal modalHandler={handleModal} room_id={room_id} />}
    </>
  );
}
