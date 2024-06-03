import RoomsFilter from "../../../../../components/dashboard/rooms_page/RoomsFilter";
import CreateRoomBtn from "../../../../../components/dashboard/rooms_page/CreateRoomBtn";
import RoomList from "../../../../../components/dashboard/rooms_page/RoomList";

export default function RoomsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col px-3 md:px-7 pt-1 gap-5">
      <section className="w-full flex flex-col-reverse sm:flex-row justify-center items-center gap-3">
        <RoomsFilter />
        <CreateRoomBtn />
      </section>
      <RoomList />
    </div>
  );
}
