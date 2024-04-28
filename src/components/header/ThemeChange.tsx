"use client";

import React from "react";
import { setTheme } from "../../lib/helpers";
import { setThemeInCookies } from "../../lib/actions";
import { useTranslations } from "next-intl";

function ThemeChange({ action }: { action?: () => void }) {
  const t = useTranslations("Header.navigation.themeChanger");
  return (
    <div className="flex justify-center items-center gap-1">
      <p
        className="cursor-pointer"
        onClick={() => {
          setTheme("dark");
          setThemeInCookies("dark");
        }}
      >
        <span onClick={action}>{t("dark")}</span>
      </p>
      <p>/</p>
      <p
        className="cursor-pointer"
        onClick={() => {
          setTheme("light");
          setThemeInCookies("light");
        }}
      >
        <span onClick={action}>{t("light")}</span>
      </p>
      <p>/</p>
      <p
        className="cursor-pointer"
        onClick={() => {
          setTheme("os");
          setThemeInCookies("os");
        }}
      >
        <span onClick={action}>{t("os")}</span>
      </p>
    </div>
  );
}

export default ThemeChange;
