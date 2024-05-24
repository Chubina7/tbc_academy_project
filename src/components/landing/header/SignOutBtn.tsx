"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { FaSignOutAlt } from "react-icons/fa";
import { detectEnviro } from "../../../lib/helpers";

const domain = detectEnviro();

export default function SignOutBtn() {
  const t = useTranslations("Header.navigation");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const signOutHandler = async () => {
    setIsLoading(true);
    const res = await fetch(`${domain}/api/auth/logout`);
    const result: LogOutResponse = await res.json();

    if (res.status === 200) {
      router.replace("/dashboard/login");
    } else {
      console.log(res.status);
      console.log(result);
    }

    setIsLoading(false);
  };

  return (
    <button
      className="text-[#EEE8F6] bg-[#3D52A1] dark:text-[#3D52A1] dark:bg-[#EEE8F6] px-5 py-1 font-bold rounded-full flex justify-center items-center gap-2 transition-all duration-300 opacity-70 hover:opacity-100"
      onClick={signOutHandler}
    >
      {isLoading ? "Signing out..." : t("signOutBtn")}
      <FaSignOutAlt size={18} />
    </button>
  );
}
