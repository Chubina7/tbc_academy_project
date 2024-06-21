"use client";

import { useContext } from "react";
import { UploadNewBookContext as ctx } from "../../../../../../../../context/ctx";

interface Props {
  handleOptions: () => void;
}

export default function Options({ handleOptions }: Props) {
  const { setData, setError, roomSuggestions } = useContext(ctx);

  return (
    <div
      className="absolute bottom-9 left-0 w-full max-h-96 bg-[#FFFFFF] dark:bg-[#352F44] border rounded-lg overflow-hidden"
      id="room_selecting_in_new_book"
    >
      <ul className="w-full flex flex-col" id="room_selecting_in_new_book">
        {roomSuggestions ? (
          roomSuggestions.length > 0 ? (
            roomSuggestions.map((item) => (
              <li
                key={item.room_id}
                className="px-3 py-1 hover:bg-[#8BA8FF] dark:hover:bg-[#5C5470] w-full text-left truncate cursor-pointer"
                onClick={() => {
                  setData((prev) => ({ ...prev, room: item }));
                  setError("");
                  handleOptions();
                }}
                id="room_selecting_in_new_book"
              >
                {item.room_name}
              </li>
            ))
          ) : (
            <p className="px-3 py-1">Getting list...</p>
          )
        ) : (
          <p className="px-3 py-1">No data.</p>
        )}
      </ul>
    </div>
  );
}
