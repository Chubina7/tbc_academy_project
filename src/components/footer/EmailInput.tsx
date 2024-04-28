import React from "react";
import { inputUI } from "../../lib/styles";
import { useTranslations } from "next-intl";

export default function EmailInput() {
  const t = useTranslations("Footer");
  // The logic which catches inserted email by user and stores it somewhere
  return (
    <input
      className={`py-2 px-5 text-xs ${inputUI}`}
      type="email"
      placeholder={t("inputPh")}
    />
  );
}
