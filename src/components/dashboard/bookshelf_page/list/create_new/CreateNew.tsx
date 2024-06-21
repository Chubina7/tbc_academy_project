"use client";

import { useState } from "react";
import Modal from "./modal/Modal";
import UploadNewBookProvider from "../../../../../context/providers/UploadNewBookProvider";
import InputTypeFile from "./InputTypeFile";

export default function CreateNew() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UploadNewBookProvider>
      {isOpen && <Modal closeModal={() => setIsOpen(false)} />}
      <InputTypeFile openModal={() => setIsOpen(true)} />
    </UploadNewBookProvider>
  );
}
