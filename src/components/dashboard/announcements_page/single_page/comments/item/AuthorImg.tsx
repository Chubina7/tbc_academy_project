import Image from "next/image";
import fallback_img from "/public/anonym_user.webp";

export default function AuthorImg() {
  return (
    <Image
      src={fallback_img}
      alt=""
      width={64}
      height={64}
      className="w-12 h-12 rounded-full"
    />
  );
}
