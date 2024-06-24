"use client";

import { useContext } from "react";
import { RoomsListFilterContext as ctx } from "../../../../context/ctx";
import VariantsList from "../../../ui/framerMotionDivs/variants/VariantsList";
import RoomListItem from "./room_list_item/RoomListItem";

interface Props {
  rooms: Array<IRoom>;
  role: RoleType;
}

export default function RoomList({ rooms, role }: Props) {
  const { selectedCategories } = useContext(ctx);

  const list = (
    <VariantsList className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible">
      {rooms
        .filter((room) => {
          if (selectedCategories.includes("all")) return room;
          return room.category.some((ctg) => selectedCategories.includes(ctg));
        })
        .map((room) => (
          <RoomListItem key={room.room_id} data={room} role={role} />
        ))}
    </VariantsList>
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
