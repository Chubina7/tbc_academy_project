"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { FaSignOutAlt } from "react-icons/fa";
import { detectEnviro } from "../../../lib/helpers/regular_funcs/general";

const domain = detectEnviro();

export default function SignOutBtn() {
  const t = useTranslations("dashboard.header.modal.signOutBtn");
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
    router.refresh();
  };

  return (
    <button
      className="w-full flex justify-start items-center px-3 py-1 gap-2 rounded-xl hover:bg-[#8BA8FF] dark:hover:bg-[#5C5470]"
      onClick={signOutHandler}
      id="profile_modal"
    >
      <FaSignOutAlt size={18} />
      {isLoading ? t("loading") : t("static")}
    </button>
  );
}
