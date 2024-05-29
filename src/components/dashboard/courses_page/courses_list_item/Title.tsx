import Link from "next/link";
import { IoEllipsisHorizontal } from "react-icons/io5";

interface Props {
  data: { course_id: string; course_title: string };
}

export default function Title({ data }: Props) {
  const { course_id, course_title } = data;

  return (
    <h1 className="relative flex-1 font-bold text-xl pr-8">
      <Link href={`/dashboard/courses/${course_id}`}>{course_title}</Link>
      <IoEllipsisHorizontal
        size={18}
        className="absolute right-0 top-0 cursor-pointer"
      />
    </h1>
  );
}
