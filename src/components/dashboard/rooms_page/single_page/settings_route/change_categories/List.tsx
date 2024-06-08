import React from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  data: Array<any>;
}

export default function List({ data }: Props) {
  return (
    <ul>
      {data.map((item, idx) => (
        <li
          key={idx}
          className="w-fit inline-block border border-[#2B3674] dark:border-[#5C5470] rounded-full px-3 py-0.5 m-1.5 transition-all duration-300"
        >
          <div className="flex justify-center items-center gap-2 select-none">
            <p className="text-sm text-nowrap">{item}</p>
            <IoClose size={18} className="cursor-pointer" />
          </div>
        </li>
      ))}
    </ul>
  );
}
