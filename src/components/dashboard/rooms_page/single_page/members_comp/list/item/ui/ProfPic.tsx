import Image from "next/image";
import img from "/public/anonym_user.webp";

interface Props {
  src: string | null;
  alt: string;
}

export default function ProfPic({ src, alt }: Props) {
  return (
    <Image
      src={src || img}
      alt={`${alt}'s profile picture`}
      width={42}
      height={42}
      className="rounded-full w-9 h-9"
    />
  );
}
