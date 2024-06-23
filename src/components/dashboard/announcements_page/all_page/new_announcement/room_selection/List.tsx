"use client";

import { useContext } from "react";
import { AddNewAnnouncementContext as newAnnCtx } from "../../../../../../context/ctx";

interface Props {
  closeModal: () => void;
  setSelectedName: React.Dispatch<React.SetStateAction<string>>;
  data: Array<{ room_id: string; room_name: string }>;
}

export default function List({ data, closeModal, setSelectedName }: Props) {
  const { setRoomId, setError } = useContext(newAnnCtx);

  return (
    <ul
      className="absolute top-10 left-0 w-full border-2 bg-[#FFFFFF] dark:bg-[#5C5470] rounded-lg overflow-hidden transition-all duration-300"
      id="select_room_new_announcement"
    >
      {data.map((item) => (
        <li
          id="select_room_new_announcement"
          key={item.room_id}
          className="w-full px-3 py-1 hover:bg-[#8BA8FF] dark:hover:bg-[#5C5470] text-left truncate cursor-pointer"
          onClick={() => {
            closeModal();
            setError(false);
            setRoomId(item.room_id);
            setSelectedName(item.room_name);
          }}
        >
          {item.room_name}
        </li>
      ))}
    </ul>
  );
}
