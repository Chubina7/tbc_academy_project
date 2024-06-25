"use client";

import { useState } from "react";
import List from "./List";
import useOutsideClickTrack from "../../../../../../../hooks/useOutsideClickTrack";
import { IoCaretUp } from "react-icons/io5";
import { useTranslations } from "next-intl";

interface Props {
  roomList: Array<{ room_id: string; room_name: string }>;
}

export default function SelectRoom({ roomList }: Props) {
  const [selectedName, setSelectedName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClickTrack("select_room_new_announcement", [isOpen, setIsOpen]);
  const t = useTranslations("dashboard.pages.announcements.new");

  const modalHandler = () => setIsOpen((prev) => !prev);

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
          {selectedName !== "" ? selectedName : t("select")}
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
