import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function ToLoginAction() {
  const t = useTranslations("Auth.register.info");

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <p className="w-full text-center">
        {t("text")}{" "}
        <Link href={"/dashboard/login"}>
          <span className="underline ">{t("underline")}</span>
        </Link>
      </p>
    </div>
  );
}
