"use client";

import { useContext } from "react";
import { AddNewAnnouncementContext as newAnnCtx } from "../../../../../context/ctx";

const room_list = [
  {
    title: "Math Introduction",
    room_id: "R0001",
  },
  {
    title: "Advanced Python",
    room_id: "R0002",
  },
  {
    title: "Marketing Advisors",
    room_id: "R0003",
  },
  {
    title: "Introduction to programming with Javascript and native languages",
    room_id: "R0004",
  },
];

export default function SelectRoom() {
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
      {room_list.map((item, idx) => (
        <option key={idx} value={item.room_id}>
          {item.title}
        </option>
      ))}
      <option value="default" hidden>
        Select Room
      </option>
    </select>
  );
}
