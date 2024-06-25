"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function Input() {
  const { inputValue, setInputValue, handleCtgAdd } = useContext(ctx);
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.ctg"
  );

  return (
    <input
      className="w-full border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
      type="search"
      placeholder={t("ph")}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value.replace(/[^a-zA-Z]/g, ""))}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleCtgAdd(inputValue);
        }
      }}
    />
  );
}
