import Image from "next/image";
import fallback_img from "/public/library.jpg";

export default function RoomImage() {
  return (
    <Image
      src={fallback_img}
      alt=""
      width={600}
      height={540}
      className="w-full object-cover max-h-44"
    />
  );
}
