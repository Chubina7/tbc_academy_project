import Link from "next/link";
import { IoOpen } from "react-icons/io5";

export default function SeeProfile() {
  return (
    <Link
      href={`/dashboard/users/U____`}
      className="w-full flex justify-start items-center gap-2 px-5 py-3 hover:bg-red-300 hover:dark:bg-[#5C5470] cursor-pointer"
    >
      <IoOpen size={20} />
      <p>See profile</p>
    </Link>
  );
}
