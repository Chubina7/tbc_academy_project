import Image from "next/image";
import fallback_img from "/public/library.jpg";

export default function BgImage() {
  return (
    <Image
      src={fallback_img}
      alt=""
      width={732}
      height={540}
      className="w-full h-full object-cover blur-sm"
    />
  );
}
