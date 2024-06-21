"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SeeAllBtn() {
  const path = usePathname();

  return (
    <p className="w-full text-center mb-1">
      <Link href={`${path}/grades`} className="hover:underline cursor-pointer">
        See your grades
      </Link>
    </p>
  );
}
