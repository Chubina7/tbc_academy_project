"use client";

import { IoMailOutline } from "react-icons/io5";

interface Props {
  inputValueState: [
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>
  ];
}

export default function EmailInput({ inputValueState }: Props) {
  const [email, setEmail] = inputValueState;

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
