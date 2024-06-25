"use client";

import { useContext } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { RegistrationInputsContext } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function UsernameInput() {
  const { inputs } = useContext(RegistrationInputsContext);
  const { value, setValue } = inputs.usernameState;
  const t = useTranslations(
    "dashboard.authorization.register.components.personalDetails"
  );

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
        placeholder={t("username")}
        className={`relative w-full bg-[#FFFFFF] text-[#2B3674] dark:bg-[#5C5470] dark:text-[#F4F7FF] rounded-xl px-3 py-3 pl-12 outline-none focus:outline-none text-lg opacity-60 focus:opacity-100 | transition-all duration-300`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
