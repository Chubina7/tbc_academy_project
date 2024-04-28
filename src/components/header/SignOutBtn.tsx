"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

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
      className="text-inherit font-bold px-5 py-1 bg-black rounded-full"
      onClick={async () => {
        signOutHandler();
        router.refresh();
        router.replace(`/login`);
      }}
    >
      {t("signOutBtn")}
    </button>
  );
}
