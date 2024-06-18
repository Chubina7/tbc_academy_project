import Link from "next/link";
import { USER } from "../../../../../../../lib/helpers/server_act_funcs/authorization";
import Categories from "../../../../../../../components/dashboard/rooms_page/single_page/settings_route/change_categories/Categories";
import CoverPicture from "../../../../../../../components/dashboard/rooms_page/single_page/settings_route/change_picture/CoverPicture";
import DeleteRoom from "../../../../../../../components/dashboard/rooms_page/single_page/settings_route/delete_room/DeleteRoom";
import Information from "../../../../../../../components/dashboard/rooms_page/single_page/settings_route/change_information/Information";
import { getSingleRoomData } from "../../../../../../../lib/data_fetchers";

interface Props {
  params: IParams;
}

const NoAccessPage = ({ message }: { message: string }) => (
  <section className="w-full h-full flex flex-col p-3 md:p-7 gap-5 overflow-visible">
    <h1>{message}</h1>
    <Link href="/dashboard">DASHBOARD</Link>
  </section>
);

export default async function SettingsPage({ params }: Props) {
  const { role } = await USER();

  if (role === "student") {
    return <NoAccessPage message="You don't have access to see the page!" />;
  }

  if (role === "admin") {
    return (
      <NoAccessPage message="Admin only have access to delete room, not to change the settings." />
    );
  }

  if (role === "teacher") {
    const data = await getSingleRoomData(params.slug);

    if (!data) return null;

    return (
      <section className="w-full flex flex-col justify-start items-center p-3 md:p-7 gap-5">
        <Information
          data={{
            title: data.intro.room_name,
            description: data.intro.room_description,
          }}
        />
        <Categories data={data.categories} />
        <CoverPicture data={data.intro.room_image} />
        <DeleteRoom />
      </section>
    );
  }

  return null;
}
