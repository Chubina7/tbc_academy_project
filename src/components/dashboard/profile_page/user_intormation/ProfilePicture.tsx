import Image from "next/image";
import anonym_user from "/public/anonym_user.webp";

export default function ProfilePicture() {
  return (
    <Image
      src={anonym_user}
      alt=""
      width={270}
      height={270}
      className="w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 lg:ml-10 rounded-full border-2 border-[#5C5470]"
    />
  );
}
