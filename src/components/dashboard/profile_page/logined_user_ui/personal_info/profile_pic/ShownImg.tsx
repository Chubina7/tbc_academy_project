import Image, { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData;
}

export default function ShownImg({ src }: Props) {
  return (
    <Image
      src={src}
      alt="profile_pic"
      width={384}
      height={384}
      className="rounded-lg"
    />
  );
}
