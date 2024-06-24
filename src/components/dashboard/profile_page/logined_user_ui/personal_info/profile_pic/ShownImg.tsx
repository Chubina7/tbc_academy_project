"use client";

import Image from "next/image";
import fallback_img from "/public/anonym_user.webp";
import { useContext } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";

export default function ShownImg() {
  const { value } = useContext(ctx);

  const local = (() => {
    if (!value.profile.file) return;
    const url = URL.createObjectURL(value.profile.file);
    () => URL.revokeObjectURL(url);
    return url;
  })();
  const blob = value.profile.picture;

  return (
    <Image
      src={local ? local : blob || fallback_img}
      alt="profile_pic"
      width={384}
      height={384}
      className="rounded-lg object-cover w-full h-full max-w-96 max-h-96"
    />
  );
}
