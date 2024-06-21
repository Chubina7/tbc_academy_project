"use client";

import { useState } from "react";
import Options from "./Options";
import Select from "./Select";
import useOutsideClickTrack from "../../../../../../../../hooks/useOutsideClickTrack";

export default function SelectRoom() {
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClickTrack("room_selecting_in_new_book", [isOpen, setIsOpen]);
  const [selectedRoom, setSelectedRoom] = useState({
    room_id: "",
    room_name: "",
  });

  const handleSelectionModal = () => {
    setIsOpen((prev) => !prev);
  };

  const selectRoom = (selection: typeof selectedRoom) => {
    setSelectedRoom(selection);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="relative w-full rounded-lg border bg-transparent"
        id="room_selecting_in_new_book"
      >
        {isOpen && <Options selectRoom={selectRoom} />}
        <Select
          closeOptions={handleSelectionModal}
          isOpen={isOpen}
          selected={
            selectedRoom.room_name === "" ? undefined : selectedRoom.room_name
          }
        />
      </div>
    </>
  );
}
