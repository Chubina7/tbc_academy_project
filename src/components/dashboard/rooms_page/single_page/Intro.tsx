import Image from "next/image";
import fallback_img from "/public/library.jpg";

export default function Intro() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden shadow-custom | w-full max-h-96">
      <Image
        src={fallback_img}
        alt=""
        width={732}
        height={540}
        className="w-full"
      />
      <div className="absolute top-0 left-0 p-3 text-white">
        <h1>TITLE</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, dicta.
        </p>
      </div>
    </div>
  );
}
