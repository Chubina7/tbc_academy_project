"use client";

import { useContext } from "react";
import { EditRoomInformationContext } from "../../../../../../context/ctx";

export default function ErrorMsg() {
  const { validationMessage } = useContext(EditRoomInformationContext);

  return <p className="text-sm pl-5 text-red-600">{validationMessage}</p>;
}
