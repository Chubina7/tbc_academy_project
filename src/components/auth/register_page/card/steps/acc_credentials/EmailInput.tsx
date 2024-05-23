"use client";

import React, { useContext } from "react";
import { IoMailOutline } from "react-icons/io5";
import { RegistrationInputsContext } from "../../../../../../context/ctx";

export default function EmailInput() {
  const { emailState } = useContext(RegistrationInputsContext);
  const { value, setValue } = emailState;

  return (
    <div className="relative w-full">
      <IoMailOutline
        size={20}
        className="absolute top-[50%] left-4 -translate-y-[50%] text-[#2B3674] dark:text-[#F4F7FF] opacity-60 z-50"
      />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter valid email"
        className={`relative w-full bg-[#FFFFFF] text-[#2B3674] dark:bg-[#5C5470] dark:text-[#F4F7FF] rounded-xl px-3 py-3 pl-12 outline-none focus:outline-none text-lg opacity-60 focus:opacity-100 | transition-all duration-300`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // disabled={loadingState}
      />
    </div>
  );
}
