import VariantsListItem from "../../../ui/framerMotionDivs/variants/VariantsListItem";
import Members from "./Members";
import CategoryLink from "./CategoryLink";
import ImageLink from "./ImageLink";
import Title from "./Title";
import CreatedDate from "./CreatedDate";

interface Props {
  data: {
    course_id: string;
    image: string;
    category: string;
    course_title: string;
    students: Array<any>;
    created_at: string;
  };
}

export default function CourseItem({ data }: Props) {
  const { course_id, image, category, course_title, students, created_at } =
    data;

  return (
    <VariantsListItem className="bg-[#FFFFFF] dark:bg-[#352F44] | w-full rounded-lg p-3 | transition-colors duration-300 flex flex-col gap-2">
      <Title data={{ course_id, course_title }} />
      <div className="w-full flex flex-col justify-start items-center gap-2">
        <ImageLink data={{ course_id, image }} />
        <div className="w-full flex flex-col gap-1">
          <CategoryLink data={category} />
          <Members data={students} />
          <CreatedDate data={created_at} />
        </div>
      </div>
    </VariantsListItem>
  );
}
