"use client";

import { useContext } from "react";
import ReType from "./ReType";
import { IoLockClosedOutline } from "react-icons/io5";
import { RegistrationInputsContext } from "../../../../../../../context/ctx";

export default function PasswordInput() {
  const { inputs } = useContext(RegistrationInputsContext);
  const { value, setValue } = inputs.passwordState;

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="relative w-full">
        <IoLockClosedOutline
          size={20}
          className="absolute top-[50%] left-4 -translate-y-[50%] text-[#2B3674] dark:text-[#F4F7FF] opacity-60 z-50"
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Enter password"
          className={`relative w-full bg-[#FFFFFF] text-[#2B3674] dark:bg-[#5C5470] dark:text-[#F4F7FF] rounded-xl px-3 py-3 pl-12 outline-none focus:outline-none text-lg opacity-60 focus:opacity-100 | transition-all duration-300`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <ReType />
    </div>
  );
}
