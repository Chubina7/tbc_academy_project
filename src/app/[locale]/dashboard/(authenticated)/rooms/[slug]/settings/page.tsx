import Link from "next/link";
import { USER } from "../../../../../../../lib/helpers/server_act_funcs/authorization";
import Categories from "../../../../../../../components/dashboard/rooms_page/single_page/settings_route/change_categories/Categories";
import CoverPicture from "../../../../../../../components/dashboard/rooms_page/single_page/settings_route/change_picture/CoverPicture";
import DeleteRoom from "../../../../../../../components/dashboard/rooms_page/single_page/settings_route/delete_room/DeleteRoom";
import Information from "../../../../../../../components/dashboard/rooms_page/single_page/settings_route/change_information/Information";

interface Props {
  params: IParams;
}

export default async function SettingsPage({ params }: Props) {
  const { role } = await USER();
  console.log("ჩემი სლაგია", params.slug);

  if (role !== "teacher")
    return (
      <section className="w-full h-full flex flex-col p-3 md:p-7 gap-5 overflow-visible">
        <h1>You dont have access to see the page!</h1>
        <Link href="/dashboard">DASHBOARD</Link>
      </section>
    );

  return (
    <section className="w-full flex flex-col justify-start items-center p-3 md:p-7 gap-5">
      <Information />
      <Categories />
      <CoverPicture />
      <DeleteRoom />
    </section>
  );
}
