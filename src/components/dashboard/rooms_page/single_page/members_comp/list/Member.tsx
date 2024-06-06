import Image from "next/image";
import img from "/public/anonym_user.webp";

export default function Member() {
  return (
    <div className="w-full flex justify-center items-center gap-2 ">
      <Image
        src={img}
        alt=""
        width={42}
        height={42}
        className="rounded-full w-9 h-9"
      />
      <div className="w-full flex flex-col justify-center items-start">
        <h1 className="w-full font-semibold line-clamp-2">NAMENAME SURNAMESURNAMEEE</h1>
        <p className="text-sm">example@gmail.com</p>
      </div>
    </div>
  );
}
