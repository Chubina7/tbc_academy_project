import Link from "next/link";
import React from "react";
import { GiWhiteBook } from "react-icons/gi";
import TopToDown from "../../../ui/framerMotionDivs/directions/TopToDown";

function Logo() {
  return (
    <Link href={"/dashboard"}>
      <TopToDown className="flex justify-center items-center gap-3">
        <GiWhiteBook size={36} />
        <h1 className="hidden xl:block text-lg font-bold">LMS For you</h1>
      </TopToDown>
    </Link>
  );
}

export default Logo;
