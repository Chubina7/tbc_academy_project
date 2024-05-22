"use client";

import { IoLockClosedOutline } from "react-icons/io5";

interface Props {
  inputValueState: [
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>
  ];
}

export default function PasswordInput({ inputValueState }: Props) {
  const [password, setPassword] = inputValueState;

  return (
    <div className="relative w-full">
      <IoLockClosedOutline
        size={20}
        className="absolute top-[50%] left-4 -translate-y-[50%] dark:text-[#F4F7FF] opacity-60 z-50"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="example123"
        className="relative w-full bg-[#FFFFFF] text-[#2B3674] dark:bg-[#5C5470] dark:text-[#F4F7FF] rounded-xl px-3 py-3 pl-12 focus:outline-[#2B3674] text-lg opacity-60 focus:opacity-100 | transition-all duration-300"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
