import RoomListItem from "./room_list_item/RoomListItem";

export default function RoomList() {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <RoomListItem />
      <RoomListItem />
      <RoomListItem />
    </section>
  );
}
