import React from "react";
import Image from "next/image";
import fallback_img from "../../../public/anonym_user.webp";

function AuthorInfo({ userId }) {
  return (
    <div className="w-full flex justify-stretch items-center gap-4 py-5">
      <div className="w-14 h-14">
        <Image
          className="rounded-full object-cover"
          src={!userId ? "" : fallback_img}
          alt={"Test"}
          width={64}
          height={64}
        />
      </div>
      <h1>{userId}</h1>
    </div>
  );
}

export default AuthorInfo;
