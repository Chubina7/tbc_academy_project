import { useTranslations } from "next-intl";
import React from "react";

function Test() {
  const t = useTranslations("auth");

  return <div>{t("login.title")}</div>;
}

export default Test;
