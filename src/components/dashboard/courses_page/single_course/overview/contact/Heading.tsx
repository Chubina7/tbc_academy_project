"use client";

import { usePathname } from "next/navigation";
import RtoL from "../../../../../ui/framerMotionDivs/directions/RtoL";
import TopToDown from "../../../../../ui/framerMotionDivs/directions/TopToDown";
import Link from "next/link";

export default function Heading() {
  const path = usePathname();

  return (
    <div className="w-full flex justify-between items-center p-3">
      <TopToDown delay={0.7} className="font-bold text-2xl">
        Contact
      </TopToDown>
      <RtoL delay={1} className="text-sm cursor-pointer hover:underline">
        <Link href={`${path}/contact`}>See more</Link>
      </RtoL>
    </div>
  );
}
