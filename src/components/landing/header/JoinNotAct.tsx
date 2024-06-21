import Link from "next/link";

export default function JoinNotAct() {
  return (
    <Link
      href="/dashboard/login"
      className="px-3 py-1 border-2 rounded-lg bg-transparent borrder-[#FFFFFF] dark:border-[#352F44] hover:scale-105 hover:bg-[#FFFFFF] hover:dark:bg-[#352F44] transition-all duration-300"
    >
      Join now
    </Link>
  );
}
