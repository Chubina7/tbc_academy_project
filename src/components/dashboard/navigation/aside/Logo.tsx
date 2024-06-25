import Link from "next/link";
import React from "react";
import TopToDown from "../../../ui/framerMotionDivs/directions/TopToDown";
import { FcGraduationCap } from "react-icons/fc";

function Logo() {
  return (
    <Link href={"/dashboard"}>
      <TopToDown className="flex justify-center items-top gap-3">
        <FcGraduationCap size={36} />
        <div className="hidden xl:flex flex-col items-start justify-center">
          <h1 className=" text-lg font-bold">Skill UP</h1>
          <p className="opacity-60 text-xs">Teach Smart, Learn Better</p>
        </div>
      </TopToDown>
    </Link>
  );
}

export default Logo;
