import Link from "next/link";
import RtoL from "../../ui/framerMotionDivs/directions/RtoL";

export default function Bar() {
  return (
    <div className="w-full flex justify-end items-center">
      <Link href="/dashboard/courses/new-course-setup">
        <RtoL className="bg-red-400 | rounded-lg p-2">New Course</RtoL>
      </Link>
    </div>
  );
}
