export default function RoomsFilter() {
  return (
    <ul className="w-full flex gap-3 items-center overflow-x-scroll scroll-hidden">
      <li className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm opacity-60 hover:opacity-100 hover:cursor-pointer transition-all duration-300">
        All
      </li>
      <li className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm opacity-60 hover:opacity-100 hover:cursor-pointer transition-all duration-300">
        Math
      </li>
      <li className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm opacity-60 hover:opacity-100 hover:cursor-pointer transition-all duration-300">
        Pysics
      </li>
      <li className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm opacity-60 hover:opacity-100 hover:cursor-pointer transition-all duration-300">
        Coding
      </li>
      <li className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm opacity-60 hover:opacity-100 hover:cursor-pointer transition-all duration-300">
        Marketing
      </li>
    </ul>
  );
}
