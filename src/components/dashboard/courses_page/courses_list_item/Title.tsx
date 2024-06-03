import Link from "next/link";
import { IoEllipsisHorizontal } from "react-icons/io5";

interface Props {
  data: { course_id: string; course_title: string };
}

export default function Title({ data }: Props) {
  const { course_id, course_title } = data;

  return (
    <h1 className="flex-1 font-bold text-xl flex w-full justify-between items-start gap-3">
      <Link href={`/dashboard/courses/${course_id}`}>{course_title}</Link>
      <IoEllipsisHorizontal size={18} className="cursor-pointer" />
    </h1>
  );
}
