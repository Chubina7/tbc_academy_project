import Image from "next/image";
import fallback_img from "/public/anonym_user.webp";

interface Props {
  src: string | null;
}

export default function ProfPic({ src }: Props) {
  return (
    <Image
      src={src || fallback_img}
      alt=""
      width={512}
      height={512}
      className="w-60 h-60 rounded-full object-cover"
    />
  );
}
