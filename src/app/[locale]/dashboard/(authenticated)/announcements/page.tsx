import Filter from "../../../../../components/dashboard/announcements_page/all_page/filter/Filter";
import List from "../../../../../components/dashboard/announcements_page/all_page/list/List";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization_acts";
import { getAnnouncementList } from "../../../../../lib/data_fetchers";
import { unstable_setRequestLocale } from "next-intl/server";
import TeacherComp from "../../../../../components/dashboard/announcements_page/all_page/non_student_comp/TeacherComp";
import { getUserRooms } from "../../../../../lib/helpers/server_act_funcs/user_relations";

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
  const { user_id, role } = await USER();
  const data = await getAnnouncementList();
  const enrolledRooms = await getUserRooms(user_id);

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-3 md:px-7 py-3 gap-5">
      {role !== "student" && <TeacherComp enrolledRoomList={enrolledRooms} />}
      <Filter room_names={data?.room_names} />
      <List
        data={data?.announcements}
        query={searchParams._announcements_made_in}
      />
    </div>
  );
}
