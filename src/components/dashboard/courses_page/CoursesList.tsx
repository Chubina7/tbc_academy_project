import CourseItem from "./CourseItem";
import VariantsList from "../../ui/framerMotionDivs/variants/VariantsList";
import { getCoursesList } from "../../../lib/helpers/regular_funcs/courses_api";

export default async function CoursesList() {
  const courses = await getCoursesList();

  return (
    <VariantsList className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {courses.length > 0 ? (
        courses.map((item: any) => (
          <CourseItem key={item.course_id} data={item} />
        ))
      ) : (
        <p>Empty courses list</p>
      )}
    </VariantsList>
  );
}
