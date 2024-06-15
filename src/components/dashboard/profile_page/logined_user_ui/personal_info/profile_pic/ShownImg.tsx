"use client";

import Image from "next/image";
import fallback_img from "/public/anonym_user.webp";
import { useContext } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";

export default function ShownImg() {
  const { value } = useContext(ctx);

  return (
    <Image
      src={value.profile_picture || fallback_img}
      alt="profile_pic"
      width={384}
      height={384}
      className="rounded-lg object-cover w-full h-full max-w-96 max-h-96"
    />
  );
}
