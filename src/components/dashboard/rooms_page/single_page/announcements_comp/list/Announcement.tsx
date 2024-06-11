import Link from "next/link";
import { IoAlertCircle, IoChatbubbleOutline } from "react-icons/io5";

export default function Announcement() {
  return (
    <Link
      href={`/dashboard/annoucements`}
      className="w-full flex justify-start items-start gap-3 px-3 sm:px-6 py-3 hover:bg-red-300 hover:dark:bg-[#5C5470]"
    >
      <IoAlertCircle size={36} />
      <div className="w-full flex flex-col items-start justify-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg font-semibold line-clamp-1">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="w-fit text-xs text-nowrap">1 hour ago</p>
        </div>
        <p className="text-sm line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          earumpsum, dolor sit Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum, harum repudiandae! Id? adipisicing elit.
          Distinctio, quis.
        </p>
        <div className="flex justify-center items-center gap-1 text-xs mt-1">
          <IoChatbubbleOutline size={18} />
          <p>12 comments</p>
        </div>
      </div>
    </Link>
  );
}
