"use client";

import { useState } from "react";
import Options from "./Options";
import Select from "./Select";
import useOutsideClickTrack from "../../../../../../../../hooks/useOutsideClickTrack";

export default function SelectRoom() {
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClickTrack("room_selecting_in_new_book", [isOpen, setIsOpen]);

  const handleSelectionModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div
        className="relative w-full rounded-lg border bg-transparent"
        id="room_selecting_in_new_book"
      >
        {isOpen && <Options closeOptions={handleSelectionModal} />}
        <Select closeOptions={handleSelectionModal} isOpen={isOpen} />
      </div>
    </>
  );
}
