"use client";

import { useContext } from "react";
import RoomListItem from "./room_list_item/RoomListItem";
import { RoomsListFilterContext as ctx } from "../../../context/ctx";

interface Props {
  rooms: Array<IRoom>;
}

export default function RoomList({ rooms }: Props) {
  const { selectedCategories } = useContext(ctx);

  const list = (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {rooms
        .filter((room) => {
          if (selectedCategories.includes("all")) return room;
          return room.category.some((ctg) => selectedCategories.includes(ctg));
        })
        .map((room) => (
          <RoomListItem
            key={room.room_id}
            room_id={room.room_id}
            room_name={room.room_name}
            description={room.description}
            image={room.image}
            teacher={room.teacher}
            enrolled_number={room.enrolled_number}
            category={room.category}
            created_at={room.created_at}
          />
        ))}
    </section>
  );

  const emptyList = (
    <section className="w-full pt-5">
      <p className="w-full text-center">
        Empty rooms list. Join at least one, first!
      </p>
    </section>
  );

  return rooms.length > 0 ? list : emptyList;
}
