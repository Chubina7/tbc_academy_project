import VariantsListItem from "../../../ui/framerMotionDivs/variants/VariantsListItem";
import Members from "./Members";
import CategoryLink from "./CategoryLink";
import Date from "./Date";
import ImageLink from "./ImageLink";
import Title from "./Title";

interface Props {
  data: {
    course_id: string;
    image: string;
    category: string;
    course_title: string;
    members: Array<any>;
    date: string;
  };
}

export default function CourseItem({ data }: Props) {
  const { course_id, image, category, course_title, members, date } = data;

  return (
    <VariantsListItem className="bg-[#FFFFFF] dark:bg-[#352F44] | w-full rounded-lg p-3 | transition-colors duration-300 flex flex-col gap-2">
      <Title data={{ course_id, course_title }} />
      <ImageLink data={{ course_id, image }} />
      <div className="flex flex-col gap-1">
        <CategoryLink data={category} />
        <Members data={members} />
        <Date data={date} />
      </div>
    </VariantsListItem>
  );
}
