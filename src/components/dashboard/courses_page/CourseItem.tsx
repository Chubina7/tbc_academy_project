import Link from "next/link";
import VariantsListItem from "../../ui/framerMotionDivs/variants/VariantsListItem";

export default function CourseItem({ data }: { data: any }) {
  return (
    <Link href={`/dashboard/courses/${data.course_id}`}>
      <VariantsListItem className="bg-[#FFFFFF] dark:bg-[#352F44] | w-full rounded-lg p-3 | transition-colors duration-300">
        <h1 className="font-bold">{data.course_title}</h1>
        <hr className="wf rounded-full my-2" />
        <div className="w-full flex flex-col">
          <i>MEMBERS:</i>
          <ul>
            {data.students.length > 0 ? (
              data.students.map((item: any) => (
                <li
                  key={item.user_id}
                  className="list-disc w-full flex justify-between"
                >
                  <h1>
                    {item.username} {item.surname}
                  </h1>
                  <p>{item.role}</p>
                </li>
              ))
            ) : (
              <p className="text-xs">No students found</p>
            )}
          </ul>
        </div>
        <hr className="wf rounded-full my-2" />
        <div className="w-full flex flex-col">
          <i>Teacher(s):</i>
          <ul>
            {data.teachers.map((item: any) => (
              <li
                key={item.user_id}
                className="list-disc w-full flex justify-between"
              >
                <h1>
                  {item.username} {item.surname}
                </h1>
                <p>{item.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </VariantsListItem>
    </Link>
  );
}
