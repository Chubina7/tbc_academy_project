import React from "react";
import Backdrop from "../../../../../ui/Backdrop";

interface Props {
  modalHandler: () => void;
}

export default function Modal({ modalHandler }: Props) {
  return <Backdrop modalCloser={modalHandler} />;
}
