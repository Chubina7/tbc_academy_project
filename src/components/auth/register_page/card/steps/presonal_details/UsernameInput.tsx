import React from "react";
import { IoPersonOutline } from "react-icons/io5";

export default function UsernameInput() {
  return (
    <div className="relative w-full">
      <IoPersonOutline
        size={20}
        className="absolute top-[50%] left-4 -translate-y-[50%] text-[#2B3674] dark:text-[#F4F7FF] opacity-60 z-50"
      />
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        className={`relative w-full bg-[#FFFFFF] text-[#2B3674] dark:bg-[#5C5470] dark:text-[#F4F7FF] rounded-xl px-3 py-3 pl-12 outline-none focus:outline-none text-lg opacity-60 focus:opacity-100 | transition-all duration-300`}
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        // disabled={loadingState}
      />
    </div>
  );
}
