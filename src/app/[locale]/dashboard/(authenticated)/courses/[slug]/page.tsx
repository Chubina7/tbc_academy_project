import Analytics from "../../../../../../components/dashboard/courses_page/single_course/overview/analytics/Analytics";
import Members from "../../../../../../components/dashboard/courses_page/single_course/overview/members/Members";
import Settings from "../../../../../../components/dashboard/courses_page/single_course/overview/Settings";
import { getSingleCourse } from "../../../../../../lib/helpers/regular_funcs/courses_api";
import Overview from "../../../../../../components/dashboard/courses_page/single_course/overview/overview/Overview";
import Contact from "../../../../../../components/dashboard/courses_page/single_course/overview/contact/Contact";

interface Props {
  params: IParams;
}

export default async function Page({ params }: Props) {
  const data = await getSingleCourse(params.slug);

  if (!data) return <p>No data found</p>;

  const { course_title, course_description, created_at, image } = data;

  return (
    <section className="h-full flex flex-col md:flex-row gap-5">
      <div className="w-full h-full flex flex-col gap-5">
        <Overview
          data={{ course_description, course_title, created_at, image }}
        />
        <div className="w-full h-full flex flex-col xl:flex-row gap-5">
          <Contact />
          <Members />
        </div>
      </div>
      <div className="w-full h-full flex-col sm:flex-row md:max-w-60 flex md:flex-col gap-5">
        <Analytics />
        <Settings />
      </div>
    </section>
  );
}
