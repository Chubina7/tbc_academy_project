import Image from "next/image";
import fallback_img from "/public/library.jpg";

interface Props {
  src: string | null;
}

export default function RoomImage({ src }: Props) {
  return (
    <Image
      src={src ? src : fallback_img}
      alt=""
      width={600}
      height={540}
      className="w-full object-cover max-h-44"
    />
  );
}
