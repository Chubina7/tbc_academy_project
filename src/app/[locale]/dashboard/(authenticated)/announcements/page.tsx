import Filter from "../../../../../components/dashboard/announcements_page/all_page/filter/Filter";
import List from "../../../../../components/dashboard/announcements_page/all_page/list/List";
import AddNewAnnouncement from "../../../../../components/dashboard/announcements_page/all_page/new_announcement/AddNewAnnouncement";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization_acts";
import { getAnnouncementList } from "../../../../../lib/data_fetchers";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
  searchParams: {
    _announcements_made_in: string;
  };
}

export default async function AnnouncementsPage({
  params,
  searchParams,
}: Props) {
  unstable_setRequestLocale(params.locale);
  const { role } = await USER();
  const data = await getAnnouncementList();

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-3 md:px-7 py-3 gap-5">
      {role !== "student" && (
        <>
          <h1 className="w-full max-w-4xl font-bold text-2xl">
            Make announcement
          </h1>
          <AddNewAnnouncement />
          <h1 className="w-full max-w-4xl font-bold text-2xl">
            All announcements
          </h1>
        </>
      )}
      <Filter room_names={data?.room_names} />
      <List
        data={data?.announcements}
        query={searchParams._announcements_made_in}
      />
    </div>
  );
}
