import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function ToRegister() {
  const t = useTranslations("dashboard.authorization.login.toRegister");
  
  return (
    <p className="w-full text-center transition-all duration-300 mb-10">
      {t("text")}{" "}
      <Link href="/dashboard/register" className="underline">
        {t("click")}
      </Link>
    </p>
  );
}
