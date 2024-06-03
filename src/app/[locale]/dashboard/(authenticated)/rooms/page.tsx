import RoomsFilter from "../../../../../components/dashboard/rooms_page/RoomsFilter";
import CreateRoomBtn from "../../../../../components/dashboard/rooms_page/CreateRoomBtn";
import RoomList from "../../../../../components/dashboard/rooms_page/RoomList";

const room_item: IRoom = {
  room_id: "R1234",
  room_name: "Introduction to programming",
  category: ["math", "programming", "physics"],
  description:
    "This course is about programing with C-- and ScriptJava. Join us and learn from the GOATs.",
  enrolled_number: 78,
  teacher: "Luka Chubinidze",
  created_at: "17/05/2005",
  image: null,
};

export default function RoomsPage() {
  // getRooms
  //
  return (
    <div className="w-full min-h-screen flex flex-col px-3 md:px-7 pt-1 gap-5">
      <section className="w-full flex flex-col-reverse sm:flex-row justify-center items-center gap-3">
        <RoomsFilter />
        <CreateRoomBtn />
      </section>
      <RoomList rooms={[room_item]} />
    </div>
  );
}
