import Announcements from "../../../../../../components/dashboard/rooms_page/single_page/announcements_comp/Announcements";
import Assignments from "../../../../../../components/dashboard/rooms_page/single_page/assignments_comp/Assignments";
import Grades from "../../../../../../components/dashboard/rooms_page/single_page/Grades";
import Intro from "../../../../../../components/dashboard/rooms_page/single_page/intro_comp/Intro";
import Members from "../../../../../../components/dashboard/rooms_page/single_page/members_comp/Members";
import Schedule from "../../../../../../components/dashboard/rooms_page/single_page/Schedule";

interface Props {
  params: IParams;
}

export default function RoomPage({ params }: Props) {
  console.log(params.slug);

  return (
    <section className="w-full min-h-screen flex flex-col p-3 md:p-7 gap-5 overflow-visible">
      <div className="w-full flex flex-col xl:flex-row items-start gap-5">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <div className="w-full flex flex-col 2xl:flex-row gap-5">
            <Intro />
            <Assignments />
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-5">
            <Announcements />
            <Grades />
          </div>
        </div>
        <Members />
      </div>
      <Schedule />
    </section>
  );
}
