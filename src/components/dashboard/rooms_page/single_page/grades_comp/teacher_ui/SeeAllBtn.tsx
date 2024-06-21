"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SeeAllBtn() {
  const path = usePathname();

  return (
    <p className="w-full mt-auto sm:h-9 text-center mb-1">
      <Link href={`${path}/grades`} className="hover:underline cursor-pointer">
        See all charts
      </Link>
    </p>
  );
}
