"use client";

import React, { useEffect } from "react";
import { IoMailOutline } from "react-icons/io5";

interface Props {
  inputValueState: [
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>
  ];
  isValidState: [
    isInvalid: boolean,
    setIsInvalid: React.Dispatch<React.SetStateAction<boolean>>
  ];
}

export default function EmailInput({ inputValueState, isValidState }: Props) {
  const [email, setEmail] = inputValueState;
  const [isInvalid, setIsInvalid] = isValidState;

  useEffect(() => {
    if (email.length > 0) {
      if (!email.includes("@") || !email.includes(".")) {
        setIsInvalid(true);
      } else {
        setIsInvalid(false);
      }
    } else {
      setIsInvalid(false);
    }
  }, [email, isInvalid]);

  return (
    <div className="relative w-full">
      <IoMailOutline
        size={20}
        className="absolute top-[50%] left-4 -translate-y-[50%] text-[#2B3674] dark:text-[#F4F7FF] opacity-60 z-50"
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@sample.com"
        className="relative w-full bg-[#FFFFFF] text-[#2B3674] dark:bg-[#5C5470] dark:text-[#F4F7FF] rounded-xl px-3 py-3 pl-12 focus:outline-[#2B3674] text-lg opacity-60 focus:opacity-100 | transition-all duration-300"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
