import React from "react";
import Backdrop from "../../../../../ui/Backdrop";

interface Props {
  modalHandler: () => void;
  room_id: string;
}

export default function Modal({ modalHandler, room_id }: Props) {
  console.log("room where to add: ", room_id);

  return <Backdrop modalCloser={modalHandler} />;
}
