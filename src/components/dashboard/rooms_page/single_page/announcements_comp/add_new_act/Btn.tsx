"use client";

// import { useState } from "react";
import AddBtn from "../../../../../ui/AddBtn";
// import Modal from "./Modal";
import { useRouter } from "next/navigation";

interface Props {
  room_id: string;
}

export default function Btn({}: Props) {
  // const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleModal = () => {
    router.push("/dashboard/announcements");
    // setIsOpen((prev) => !prev);
  };

  return (
    <>
      <AddBtn onClickAct={handleModal} />
      {/* {isOpen && <Modal modalHandler={handleModal} room_id={room_id} />} */}
    </>
  );
}
