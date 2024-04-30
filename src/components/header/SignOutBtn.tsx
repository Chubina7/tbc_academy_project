"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { FaSignOutAlt } from "react-icons/fa";

export default function SignOutBtn() {
  const t = useTranslations("Header.navigation");
  const router = useRouter();

  const signOutHandler = async () => {
    const res = await fetch("/api/auth/logout");
    const result: LogOutResponse = await res.json();
    // Could trigger succesful logout message with toastify
    console.log(result.message);
  };

  return (
    <button
      className="text-[#EEE8F6] bg-[#3D52A1] dark:text-[#3D52A1] dark:bg-[#EEE8F6] px-5 py-1 font-bold rounded-full flex justify-center items-center gap-2 transition-all duration-300 opacity-70 hover:opacity-100"
      onClick={async () => {
        signOutHandler();
        router.refresh();
        router.replace(`/login`);
      }}
    >
      {t("signOutBtn")}
      <FaSignOutAlt size={18} />
    </button>
  );
}
