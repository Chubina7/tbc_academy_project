"use client";

import { useState } from "react";
import List from "./List";
import useOutsideClickTrack from "../../../../../../../hooks/useOutsideClickTrack";
import { IoCaretUp } from "react-icons/io5";

interface Props {
  roomList: Array<{ room_id: string; room_name: string }>;
}

export default function SelectRoom({ roomList }: Props) {
  const [selectedName, setSelectedName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClickTrack("select_room_new_announcement", [isOpen, setIsOpen]);

  const modalHandler = () => setIsOpen((prev) => !prev);

  // return (
  //   <select
  //     name="room"
  //     id="room"
  //     className="rounded-lg bg-transparent dark:bg-[#5C5470] border-2 px-3 py-1 w-full max-w-40 overflow-x-hidden font"
  //     defaultValue={"default"}
  //     onChange={(e) => {
  //       setError(false);
  //       setRoomId(e.target.value);
  //     }}
  //   >
  //     {roomList.map((item, idx) => (
  //       <option key={idx} value={item.room_id}>
  //         {item.room_name}
  //       </option>
  //     ))}
  //     <option value="default" hidden>
  //       Select Room
  //     </option>
  //   </select>
  // );
  return (
    <div
      className="relative w-full max-w-44 rounded-lg bg-[#FFFFFF] dark:bg-[#5C5470] transition-all duration-300"
      id="select_room_new_announcement"
    >
      <button
        className="w-full flex gap-1 justify-center items-center rounded-lg border-2  px-3 py-1"
        onClick={modalHandler}
        id="select_room_new_announcement"
      >
        <p id="select_room_new_announcement" className="w-full line-clamp-1">
          {selectedName !== "" ? selectedName : "SELECT ROOM"}
        </p>
        <IoCaretUp
          size={18}
          className={`w-4 ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-all duration-300`}
          id="select_room_new_announcement"
        />
      </button>
      {isOpen && (
        <List
          data={roomList}
          closeModal={modalHandler}
          setSelectedName={setSelectedName}
        />
      )}
    </div>
  );
}
