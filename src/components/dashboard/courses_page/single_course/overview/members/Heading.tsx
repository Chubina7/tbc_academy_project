"use client";

import Link from "next/link";
import RtoL from "../../../../../ui/framerMotionDivs/directions/RtoL";
import TopToDown from "../../../../../ui/framerMotionDivs/directions/TopToDown";
import { usePathname } from "next/navigation";

export default function Heading() {
  const path = usePathname();

  return (
    <div className="w-full flex justify-between items-center p-3">
      <TopToDown delay={0.7} className="font-bold text-2xl">
        Members
      </TopToDown>
      <RtoL delay={1} className="text-sm cursor-pointer hover:underline">
        <Link href={`${path}/members`}>See more</Link>
      </RtoL>
    </div>
  );
}
