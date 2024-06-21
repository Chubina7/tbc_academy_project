import { unstable_setRequestLocale } from "next-intl/server";
import Announcements from "../../../../../../components/dashboard/rooms_page/single_page/announcements_comp/Announcements";
import Assignments from "../../../../../../components/dashboard/rooms_page/single_page/assignments_comp/Assignments";
import Grades from "../../../../../../components/dashboard/rooms_page/single_page/grades_comp/Grades";
import Intro from "../../../../../../components/dashboard/rooms_page/single_page/intro_comp/Intro";
import Members from "../../../../../../components/dashboard/rooms_page/single_page/members_comp/Members";
import Schedule from "../../../../../../components/dashboard/rooms_page/single_page/Schedule";
import { getSingleRoomData } from "../../../../../../lib/data_fetchers";

interface Props {
  params: IParams;
}

export default async function RoomPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const data = await getSingleRoomData(params.slug);

  if (!data)
    return <p className="w-full text-center">Error while fetching data</p>;

  return (
    <section className="w-full min-h-screen flex flex-col p-3 md:p-7 gap-5 overflow-visible">
      <div className="w-full flex flex-col xl:flex-row items-start gap-5">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <div className="w-full flex flex-col 2xl:flex-row gap-5">
            <Intro room_id={params.slug} data={data.intro} />
            <Assignments room_id={params.slug} data={data.assignments} />
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-5">
            <Announcements room_id={params.slug} data={data.announcements} />
            <Grades data={data.grade} />
          </div>
        </div>
        <Members room_id={params.slug} data={data.members} />
      </div>
      <Schedule />
    </section>
  );
}
