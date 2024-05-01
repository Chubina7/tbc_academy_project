import Link from "next/link";
import React from "react";
import { PiGitlabLogoFill } from "react-icons/pi";

function Logo() {
  return (
    <Link href={"/"} className="mx-2">
      <PiGitlabLogoFill size={36} color="inherit" />
    </Link>
  );
}

export default Logo;
