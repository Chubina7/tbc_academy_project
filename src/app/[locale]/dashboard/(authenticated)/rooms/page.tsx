import RoomsFilter from "../../../../../components/dashboard/rooms_page/all_page/RoomsFilter";
import CreateRoomBtn from "../../../../../components/dashboard/rooms_page/all_page/new_room_setup/CreateRoomBtn";
import RoomList from "../../../../../components/dashboard/rooms_page/all_page/RoomList";
import RoomsListFilterProvider from "../../../../../context/providers/RoomsListFilterProvider";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization";
import { getEnrolledRoomsList } from "../../../../../lib/data_fetchers";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}

export default async function RoomsPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const { role } = await USER();
  const data = await getEnrolledRoomsList();

  if (!data) return <p>Failed to load rooms data.</p>;

  return (
    <RoomsListFilterProvider>
      <div className="w-full min-h-screen flex flex-col px-3 md:px-7 pt-1 gap-5">
        <section className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 sm:gap-20">
          <RoomsFilter filters={data.categories} />
          {role !== "student" && <CreateRoomBtn />}
        </section>
        <RoomList rooms={data.rooms} role={role} />
      </div>
    </RoomsListFilterProvider>
  );
}
