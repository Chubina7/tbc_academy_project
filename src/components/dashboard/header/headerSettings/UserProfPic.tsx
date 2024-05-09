import Image from "next/image";
import React from "react";
import anonym from "/public/anonym_user.webp";

export default function UserProfPic() {
  return (
    <Image
      src={anonym}
      alt="anonym"
      width={36}
      height={36}
      className="rounded-full"
    />
  );
}
