"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { IoLockClosedOutline } from "react-icons/io5";

interface Props {
  inputValueState: [
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>
  ];
  loadingState: boolean;
}

const PasswordInput = ({ inputValueState, loadingState }: Props) => {
  const [password, setPassword] = inputValueState;
  const t = useTranslations("dashboard.authorization.login.form");

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
        placeholder={t("password")}
        className={`relative w-full bg-[#FFFFFF] text-[#2B3674] dark:bg-[#5C5470] dark:text-[#F4F7FF] rounded-xl px-3 py-3 pl-12 outline-none focus:outline-none text-lg opacity-60 focus:opacity-100 | transition-all duration-300 ${
          loadingState ? "cursor-not-allowed" : "cursor-text"
        }`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loadingState}
      />
    </div>
  );
};

export default React.memo(PasswordInput);
