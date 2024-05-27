import CourseItem from "./CourseItem";
import VariantsList from "../../ui/framerMotionDivs/variants/VariantsList";

export default function CoursesList() {
  return (
    <VariantsList className="w-full min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </VariantsList>
  );
}
