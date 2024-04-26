import React from "react";
import Image from "next/image";
import fallback_img from "../../../public/anonym_user.webp";
import { getAuthor } from "../../lib/helpers";

async function AuthorInfo({ userId }: { userId: number }) {
  const author = await getAuthor(userId);

  return (
    <div className="w-full flex justify-stretch items-center gap-4 py-5">
      <div className="w-14 h-14">
        <Image
          className="rounded-full object-cover"
          src={userId ? author.image : fallback_img}
          alt={"Test"}
          width={64}
          height={64}
        />
      </div>
      <h1>
        {author.firstName} {author.lastName}
      </h1>
    </div>
  );
}

export default AuthorInfo;
