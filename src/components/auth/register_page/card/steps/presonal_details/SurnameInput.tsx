"use client";

import { useContext } from "react";
import { IoAttachOutline } from "react-icons/io5";
import { RegistrationInputsContext } from "../../../../../../context/ctx";

export default function SurnameInput() {
  const { surnameState } = useContext(RegistrationInputsContext);
  const { value, setValue } = surnameState;

  return (
    <div className="relative w-full">
      <IoAttachOutline
        size={25}
        className="absolute top-[50%] left-3 -translate-y-[50%] text-[#2B3674] dark:text-[#F4F7FF] opacity-60 z-50"
      />
      <input
        type="text"
        id="surname"
        name="surname"
        placeholder="Surname"
        className={`relative w-full bg-[#FFFFFF] text-[#2B3674] dark:bg-[#5C5470] dark:text-[#F4F7FF] rounded-xl px-3 py-3 pl-12 outline-none focus:outline-none text-lg opacity-60 focus:opacity-100 | transition-all duration-300`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // disabled={loadingState}
      />
    </div>
  );
}
