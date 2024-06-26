"use client";

import { IoLockClosedOutline } from "react-icons/io5";
import { RegistrationInputsContext } from "../../../../../../../context/ctx";
import { useContext } from "react";
import { useTranslations } from "next-intl";

export default function ReType() {
  const { inputs } = useContext(RegistrationInputsContext);
  const { value, setValue } = inputs.reTypedPasswordState;
  const t = useTranslations(
    "dashboard.authorization.register.components.credentials"
  );

  return (
    <div className="relative w-full">
      <IoLockClosedOutline
        size={20}
        className="absolute top-[50%] left-4 -translate-y-[50%] text-[#2B3674] dark:text-[#F4F7FF] opacity-60 z-50"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder={t("password.rep")}
        className={`relative w-full bg-[#FFFFFF] text-[#2B3674] dark:bg-[#5C5470] dark:text-[#F4F7FF] rounded-xl px-3 py-3 pl-12 outline-none focus:outline-none text-lg opacity-60 focus:opacity-100 | transition-all duration-300`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
