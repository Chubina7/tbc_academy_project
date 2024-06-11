"use client";

import { useState } from "react";
import AddBtn from "../../../../../ui/AddBtn";
import Modal from "./Modal";

export default function Btn() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
    console.log("კონსოლი წევრებიდან");
  };

  return (
    <>
      <AddBtn onClickAct={handleModal} />
      {isOpen && <Modal modalHandler={handleModal} />}
    </>
  );
}
