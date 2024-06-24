import Image from "next/image";
import img from "/public/anonym_user.webp";

interface Props {
  src: string;
  alt: string;
}

export default function ProfPic({ src, alt }: Props) {
  return (
    <Image
      src={src !== "" ? src : img}
      alt={`${alt}'s profile picture`}
      width={128}
      height={128}
      className="rounded-full w-9 h-9 object-cover"
    />
  );
}
