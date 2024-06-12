import Link from "next/link";
import { IoExtensionPuzzle } from "react-icons/io5";

export default function Assignment() {
  return (
    <Link
      href={`/dashboard/assignments/`}
      className="w-full flex justify-start items-start gap-3 px-3 sm:px-6 py-3 hover:bg-red-300 hover:dark:bg-[#5C5470]"
    >
      <IoExtensionPuzzle size={32} />
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <div className="w-full flex justify-between items-center gap-3">
          <h1 className="text-lg font-semibold line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            possimus animi vitae.
          </h1>
          <p className="w-fit text-xs border border-[#2B3674] dark:border-[#5C5470] rounded-full px-3 py-0.5 transition-all duration-300 text-nowrap">
            COMPLETED
          </p>
        </div>
        <p className="line-clamp-3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, earum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          quis.
        </p>
        <div className="w-full flex justify-between text-xs">
          <p>POSTED: 12/12/1212 </p>
          <p>DUE: 12/12/1212</p>
        </div>
      </div>
    </Link>
  );
}