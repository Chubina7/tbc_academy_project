import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

export default function ToRegisterAction() {
  const t = useTranslations("Auth.login.info");

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <p className="w-full text-center">
        {t("text")}{" "}
        <Link href={"/dashboard/register"}>
          <span className="underline">{t("underline")}</span>
        </Link>
      </p>
    </div>
  );
}
