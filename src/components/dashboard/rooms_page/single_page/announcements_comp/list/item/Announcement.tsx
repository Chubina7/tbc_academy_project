import Link from "next/link";
import { IoAlertCircle, IoChatbubbleOutline } from "react-icons/io5";
import TimeAgo from "./TimeAgo";

interface Props {
  data: {
    announcement_id: string;
    announcement_title: string;
    annonced_at: string;
    announcement_description: string;
    announcement_comment_num: number;
  };
}

export default function Announcement({ data }: Props) {
  const {
    annonced_at,
    announcement_comment_num,
    announcement_description,
    announcement_id,
    announcement_title,
  } = data;

  return (
    <Link
      href={`/dashboard/announcements/${announcement_id}`}
      className="w-full flex justify-start items-start gap-3 px-3 sm:px-6 py-3 hover:bg-red-300 hover:dark:bg-[#5C5470]"
    >
      <IoAlertCircle size={36} />
      <div className="w-full flex flex-col items-start justify-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg font-semibold line-clamp-1">
            {announcement_title}
          </h1>
          <TimeAgo at={annonced_at} />
        </div>
        <p className="text-sm line-clamp-2">{announcement_description}</p>
        <div className="flex justify-center items-center gap-1 text-xs mt-1">
          <IoChatbubbleOutline size={18} />
          <p>{announcement_comment_num} comments</p>
        </div>
      </div>
    </Link>
  );
}
