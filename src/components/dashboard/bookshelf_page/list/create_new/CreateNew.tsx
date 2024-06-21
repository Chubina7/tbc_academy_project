"use client";

import { useState } from "react";
import Modal from "./modal/Modal";
import UploadNewBookProvider from "../../../../../context/providers/UploadNewBookProvider";
import InputTypeFile from "./InputTypeFile";

interface Props {
  suggestions: Array<{
    room_id: string;
    room_name: string;
  }> | null;
}

export default function CreateNew({ suggestions }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UploadNewBookProvider suggestions={suggestions}>
      {isOpen && <Modal closeModal={() => setIsOpen(false)} />}
      <InputTypeFile openModal={() => setIsOpen(true)} />
    </UploadNewBookProvider>
  );
}
