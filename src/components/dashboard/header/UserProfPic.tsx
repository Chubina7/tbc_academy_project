import Image from "next/image";
import React from "react";
import anonym from "/public/anonym_user.webp";

export default function UserProfPic() {
  return (
    <Image
      src={anonym}
      alt="anonym"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}
