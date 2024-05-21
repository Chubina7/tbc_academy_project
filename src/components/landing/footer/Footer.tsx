import React from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="hidden sm:block">
      <footer className="w-full flex justify-between items-center p-3 bg-inherit shadow-xl">
        <div>
          <h1 className="text-inherit">© {t("title")}</h1>
        </div>
      </footer>
    </div>
  );
}
