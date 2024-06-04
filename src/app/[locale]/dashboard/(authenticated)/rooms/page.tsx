import RoomsFilter from "../../../../../components/dashboard/rooms_page/RoomsFilter";
import CreateRoomBtn from "../../../../../components/dashboard/rooms_page/CreateRoomBtn";
import RoomList from "../../../../../components/dashboard/rooms_page/RoomList";
import RoomsListFilterProvider from "../../../../../context/providers/RoomsListFilterProvider";

const roomList = [
  {
    room_id: "R1234",
    room_name: "Introduction to programming",
    category: ["math", "programming"],
    description:
      "This course is about programing with C-- and ScriptJava. Join us and learn from the GOATs.",
    enrolled_number: 78,
    teacher: "Luka Chubinidze",
    created_at: "17/05/2005",
    image: null,
  },
  {
    room_id: "R2345",
    room_name: "mrktrs",
    category: ["marketing", "math"],
    description:
      "This course is about marketes. who plays hard and pays hard. who is good and what is it.",
    enrolled_number: 78,
    teacher: "Emzar Emzarashvili",
    created_at: "09/04/1997",
    image: null,
  },
];

const allCategories: Array<string> = ["marketing", "math", "programming"];

export default function RoomsPage() {
  // getting data dynamicly from DB
  // ...
  return (
    <RoomsListFilterProvider>
      <div className="w-full min-h-screen flex flex-col px-3 md:px-7 pt-1 gap-5">
        <section className="w-full flex flex-col-reverse sm:flex-row justify-center items-center gap-3">
          <RoomsFilter filters={allCategories} />
          <CreateRoomBtn />
        </section>
        <RoomList rooms={roomList} />
      </div>
    </RoomsListFilterProvider>
  );
}
