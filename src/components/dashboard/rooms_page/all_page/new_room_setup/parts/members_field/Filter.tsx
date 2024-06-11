export default function Filter() {
  return (
    <div className="w-full flex gap-4 justify-center items-center">
      <p className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm hover:cursor-pointer transition-all duration-300 select-none opacity-100 text-nowrap">
        All
      </p>
      <p className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm hover:cursor-pointer transition-all duration-300 select-none opacity-100 text-nowrap">
        Students
      </p>
      <p className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm hover:cursor-pointer transition-all duration-300 select-none opacity-100 text-nowrap">
        Teachers
      </p>
    </div>
  );
}
