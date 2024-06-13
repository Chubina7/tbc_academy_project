import Image from "next/image";
import fallback_img from "/public/anonym_user.webp";
import SaveBtn from "./SaveBtn";

export default function ProfPic() {
  return (
    <div className="w-full max-w-4xl bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 | flex flex-col justify-center items-center gap-5">
      <div className="w-full flex justify-between items-center gap-4">
        <h1 className="font-bold text-xl">Profile Picture</h1>
        <SaveBtn />
      </div>
      <Image
        src={fallback_img}
        alt=""
        width={256}
        height={256}
        className="max-w-40 max-h-40 rounded-full"
      />
    </div>
  );
}
