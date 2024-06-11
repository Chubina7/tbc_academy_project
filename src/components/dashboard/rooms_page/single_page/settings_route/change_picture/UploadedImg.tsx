import Image from "next/image";

interface Props {
  src: string;
}

export default function UploadedImg({ src }: Props) {
  return (
    <Image
      src={src}
      alt="uploaded_picture_by_user"
      width={720}
      height={450}
      className="w-full rounded-lg"
    />
  );
}
