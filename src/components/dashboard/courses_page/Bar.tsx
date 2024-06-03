import Link from "next/link";

export default function Bar() {
  return (
    <div className="w-full flex justify-end items-center">
      <Link
        href="/dashboard/courses/new-course-setup"
        className="bg-red-400 | rounded-lg p-2"
      >
        New course
      </Link>
    </div>
  );
}
