import Image from "next/image";
import backup_img from "/public/library.jpg";

export default function Overview() {
  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl p-3 transition-colors duration-300 | flex flex-col gap-3">
      <h1 className="font-bold text-2xl">Overview</h1>
      <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-10">
        <div className="w-full md:max-w-96 flex justify-center items-center">
          <Image
            src={backup_img}
            alt="IMAGE"
            width={720}
            height={540}
            className="rounded-lg"
          />
        </div>
        <div className="w-full flex flex-col">
          <h1 className="font-bold">TITLE</h1>
          <p>DESCRIPTION</p>
          <p>CREATED AT: YYYY/MM/DD</p>
        </div>
      </div>
    </div>
  );
}
