import { IoAdd } from "react-icons/io5";

export default function CreateRoomBtn() {
  // if role === "teacher" {} else null
  return (
    <button className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-xl py-2 px-3 md:py-2 md:px-5 | w-full sm:w-fit flex justify-center items-center gap-1 font-bold hover:scale-105 transition-all duration-300">
      <IoAdd size={20} />
      <span className="text-nowrap">Create room</span>
    </button>
  );
}
