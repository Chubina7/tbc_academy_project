"use client";

import { useContext } from "react";
import { AddNewAnnouncementContext as newAnnCtx } from "../../../../../context/ctx";

interface Props {
  roomList: Array<{ room_id: string; room_name: string }>;
}

export default function SelectRoom({ roomList }: Props) {
  const { setRoomId, setError } = useContext(newAnnCtx);

  return (
    <select
      name="room"
      id="room"
      className="rounded-lg bg-transparent dark:bg-[#5C5470] border-2 px-3 py-1 w-full max-w-40 overflow-x-hidden"
      defaultValue={"default"}
      onChange={(e) => {
        setError(false);
        setRoomId(e.target.value);
      }}
    >
      {roomList.map((item, idx) => (
        <option key={idx} value={item.room_id}>
          {item.room_name}
        </option>
      ))}
      <option value="default" hidden>
        Select Room
      </option>
    </select>
  );
}
