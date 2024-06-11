import Image from "next/image";
import fallback_img from "/public/anonym_user.webp";

export default function User() {
  return (
    <div className="hover:bg-red-300 | w-full px-2 sm:px-4 py-3 flex gap-3 justify-center items-center rounded-lg">
      <Image
        src={fallback_img}
        alt=""
        width={64}
        height={64}
        className="w-14 h-14 rounded-full"
      />
      <div className="w-full flex flex-col">
        <h1 className="font-semibold text-lg sm:text-xl">NAME SURNAME</h1>
        <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center text-sm opacity-60">
          <p>ROLE</p>
          <p>JOINED: 12/12/1212</p>
        </div>
      </div>
      <h1>Enroll</h1>
    </div>
  );
}
