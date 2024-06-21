"use client";

import { useContext } from "react";
import { UploadNewBookContext as ctx } from "../../../../../../../../context/ctx";

const list = [
  {
    room_id: "U0001",
    room_name: "Math",
  },
  {
    room_id: "U0002",
    room_name: "Introduction to programming",
  },
  {
    room_id: "U0003",
    room_name: "Physics",
  },
  {
    room_id: "U0004",
    room_name: "Biology",
  },
];

interface Props {
  handleOptions: () => void;
}

export default function Options({ handleOptions }: Props) {
  const { setData, setError } = useContext(ctx);

  return (
    <div
      className="absolute bottom-9 left-0 w-full max-h-96 bg-[#FFFFFF] border rounded-lg overflow-hidden"
      id="room_selecting_in_new_book"
    >
      <ul className="w-full flex flex-col" id="room_selecting_in_new_book">
        {list.map((item) => (
          <li
            key={item.room_id}
            className="px-3 py-1 hover:bg-[#8BA8FF] w-full text-left truncate cursor-pointer"
            onClick={() => {
              setData((prev) => ({ ...prev, room: item }));
              setError("");
              handleOptions();
            }}
            id="room_selecting_in_new_book"
          >
            {item.room_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
