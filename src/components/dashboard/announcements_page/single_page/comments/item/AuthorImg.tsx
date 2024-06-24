import Image from "next/image";
import fallback_img from "/public/anonym_user.webp";

interface Props {
  src: string | null;
  alt: string;
}

export default function AuthorImg({ src, alt }: Props) {
  return (
    <Image
      src={src ? src : fallback_img}
      alt={alt}
      width={128}
      height={128}
      className="w-12 h-12 rounded-full aspect-square object-cover"
    />
  );
}
