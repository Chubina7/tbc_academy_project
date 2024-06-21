import Image from "next/image";
import fallback_img from "/public/library.jpg";

interface Props {
  src: string | null;
}

export default function BgImage({ src }: Props) {
  return (
    <>
      <Image
        src={src || fallback_img}
        alt=""
        width={732}
        height={540}
        className="w-full h-full object-cover blur-sm"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55" />
    </>
  );
}
