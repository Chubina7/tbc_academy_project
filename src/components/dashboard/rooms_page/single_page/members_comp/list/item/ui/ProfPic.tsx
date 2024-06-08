import Image from "next/image";
import img from "/public/anonym_user.webp";

export default function ProfPic() {
  return (
    <Image
      src={img}
      alt=""
      width={42}
      height={42}
      className="rounded-full w-9 h-9"
    />
  );
}
