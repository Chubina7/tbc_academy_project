import Heading from "./Heading";
import CourseImage from "./CourseImage";
import Details from "./Details";
import Appear from "../../../../../ui/framerMotionDivs/Appear";

interface Props {
  data: {
    course_title: string;
    course_description: string;
    created_at: string;
    image: string | null;
  };
}

export default function Overview({ data }: Props) {
  const { course_description, course_title, created_at, image } = data;

  return (
    <Appear className="w-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl p-3 transition-colors duration-300 | flex flex-col gap-3 shadow-custom">
      <Heading />
      <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4 lg:gap-10">
        <CourseImage data={{ course_title, image }} />
        <Details data={{ course_description, course_title, created_at }} />
      </div>
    </Appear>
  );
}
