import Analytics from "../../../../../../components/dashboard/courses_page/single_course/overview/Analytics";
import Communication from "../../../../../../components/dashboard/courses_page/single_course/overview/Communication";
import Members from "../../../../../../components/dashboard/courses_page/single_course/overview/members/Members";
import Settings from "../../../../../../components/dashboard/courses_page/single_course/overview/Settings";
import { getSingleCourse } from "../../../../../../lib/helpers/regular_funcs/courses_api";
import Overview from "../../../../../../components/dashboard/courses_page/single_course/overview/Overview";

interface Props {
  params: IParams;
}

export default async function Page({ params }: Props) {
  const data = await getSingleCourse(params.slug);

  if (!data) return <p>No data found</p>;

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-5">
      <div className="w-full flex flex-col gap-5">
        <Overview />
        <div className="w-full h-full flex flex-col lg:flex-row gap-5">
          <Communication />
          <Analytics />
        </div>
        <Settings />
      </div>
      <Members />
    </div>
  );
}
