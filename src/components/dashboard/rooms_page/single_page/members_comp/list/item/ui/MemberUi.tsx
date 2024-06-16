"use client";

import EditBtn from "../edit_btn/EditBtn";
import ProfPic from "./ProfPic";
import ContactInfo from "./ContactInfo";
import Dialog from "../dialog/Dialog";
import { useState } from "react";

interface Props {
  isTeacherOrAdmin: boolean;
  data: IRoomMember;
  room_id: string;
}

export default function MemberUi({ isTeacherOrAdmin, data, room_id }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const { email, profile_picture, surname, username, user_id } = data;

  return (
    <div
      className="w-full flex justify-between items-center gap-2 px-3 sm:px-6 py-4 hover:bg-red-300 hover:dark:bg-[#5C5470]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex justify-start items-center gap-2">
        <ProfPic alt={username} src={profile_picture} />
        <ContactInfo data={{ email, surname, username }} />
      </div>
      {isHovered && isTeacherOrAdmin && <EditBtn user_id={data.user_id} />}
      <Dialog data={{ room_id, surname, user_id, username }} />
    </div>
  );
}
