"use client";

import Image from "next/image";
import { useState } from "react";
import anonym from "/public/anonym_user.webp";
import Modal from "./modal/Modal";

interface Props {
  data: IUser;
}

export default function UserIconUi({ data }: Props) {
  const modalState = useState(false);
  const { profile_picture, username, surname, email, user_id } = data;

  return (
    <div className="flex gap-2 justify-center items-center">
      <Image
        src={profile_picture ? profile_picture : anonym}
        alt="anonym"
        width={36}
        height={36}
        className="rounded-full cursor-pointer"
        onClick={() => modalState[1]((prev) => !prev)}
        id="profile_modal"
      />
      <Modal
        data={{ username, surname, email, user_id }}
        modalState={modalState}
      />
    </div>
  );
}
