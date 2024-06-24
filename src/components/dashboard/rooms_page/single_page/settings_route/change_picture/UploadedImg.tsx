import Image from "next/image";
import fallback_img from "/public/library.jpg";

interface Props {
  src: string | File;
}

export default function UploadedImg({ src }: Props) {
  const local = (() => {
    if (!(src instanceof File)) return;
    const url = URL.createObjectURL(src);
    () => URL.revokeObjectURL(url);
    return url;
  })();
  const blob = typeof src === "string" && src.trim() !== "" && src;

  return (
    <>
      <Image
        src={local ? local : blob || fallback_img}
        alt="uploaded_picture_by_user"
        width={720}
        height={450}
        className="w-full rounded-lg"
      />
      {/* <div className="w-full flex flex-col justify-center items-center border-2 border-dashed rounded-lg py-20 gap-4">
        <Info />
      </div> */}
    </>
  );
}
