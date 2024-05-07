import Link from "next/link";
import React from "react";
import { PiGitlabLogoFill } from "react-icons/pi";

function Logo() {
  return (
    <Link href={"/dashboard"} className="m-4">
      <PiGitlabLogoFill size={36} color="#603CFF" />
    </Link>
  );
}

export default Logo;
