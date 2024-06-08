import Link from "next/link";
import { USER } from "../../../../../../../lib/helpers/server_act_funcs/authorization";
import SettingsSideNav from "../../../../../../../components/dashboard/rooms_page/single_page/settings_route/SettingsSideNav";
import Setting from "../../../../../../../components/dashboard/rooms_page/single_page/settings_route/setting_list/Setting";

export default async function SettingsPage() {
  const { role } = await USER();

  if (role !== "teacher")
    return (
      <section className="w-full h-full flex flex-col p-3 md:p-7 gap-5 overflow-visible">
        <h1>You dont have access to see the page!</h1>
        <Link href="/dashboard">DASHBOARD</Link>
      </section>
    );

  return (
    <section className="w-full h-full flex justify-center items-start sm:items-start p-3 md:p-7 md:pb-3 gap-5">
      <Setting />
      <SettingsSideNav />
    </section>
  );
}
