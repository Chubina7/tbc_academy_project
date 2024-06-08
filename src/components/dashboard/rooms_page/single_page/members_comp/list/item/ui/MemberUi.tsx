"use client";

import EditBtn from "../edit_btn/EditBtn";
import ProfPic from "./ProfPic";
import ContactInfo from "./ContactInfo";
import Dialog from "../dialog/Dialog";
import { useState } from "react";

interface Props {
  isTeacher: boolean;
}

export default function MemberUi({ isTeacher }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full flex justify-between items-center gap-2 px-3 sm:px-6 py-4 hover:bg-red-300 hover:dark:bg-[#5C5470]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex justify-start items-center gap-2">
        <ProfPic />
        <ContactInfo />
      </div>
      {isHovered && isTeacher && <EditBtn />}
      <Dialog />
    </div>
  );
}
