import Link from "next/link";
import React from "react";
import { IoSchool } from "react-icons/io5";
import TopToDown from "../../../ui/framerMotionDivs/directions/TopToDown";

function Logo() {
  return (
    <Link href={"/dashboard"}>
      <TopToDown className="flex justify-center items-center gap-3">
        <IoSchool size={36} />
        <h1 className="hidden xl:block text-lg font-bold">Teach-Flow</h1>
      </TopToDown>
    </Link>
  );
}

export default Logo;
