import Bar from "../../../../../components/dashboard/courses_page/Bar";
import CoursesList from "../../../../../components/dashboard/courses_page/CoursesList";

export default function Courses() {
  return (
    <div className="h-full flex flex-col gap-3">
      <Bar />
      <CoursesList />
    </div>
  );
}
