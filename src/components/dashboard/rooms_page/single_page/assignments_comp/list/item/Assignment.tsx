import Link from "next/link";
import { IoExtensionPuzzle } from "react-icons/io5";
import Status from "./Status";
import Posted from "./Posted";
import Due from "./Due";

interface Props {
  data: {
    assignment_id: string;
    assignment_title: string;
    assignment_status: boolean;
    assignment_description: string;
    created_at: string;
    assignment_past_due: string;
  };
}

export default function Assignment({ data }: Props) {
  const {
    assignment_description,
    assignment_id,
    assignment_past_due,
    assignment_status,
    assignment_title,
    created_at,
  } = data;

  return (
    <Link
      href={`/dashboard/assignments/${assignment_id}`}
      className="w-full flex justify-start items-start gap-3 px-3 sm:px-6 py-3 hover:bg-red-300 hover:dark:bg-[#5C5470]"
    >
      <IoExtensionPuzzle size={32} />
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <div className="w-full flex justify-between items-center gap-3">
          <h1 className="text-lg font-semibold line-clamp-2">
            {assignment_title}
          </h1>
          <Status data={assignment_status} />
        </div>
        <p className="line-clamp-3 text-sm">{assignment_description}</p>
        <div className="w-full flex justify-between text-xs">
          <Posted created_at={created_at} />
          <Due due={assignment_past_due} />
        </div>
      </div>
    </Link>
  );
}
