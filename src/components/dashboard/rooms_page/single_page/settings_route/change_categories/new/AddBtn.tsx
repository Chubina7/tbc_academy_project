"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function AddBtn() {
  const { handleCtgAdd, inputValue } = useContext(ctx);
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.ctg"
  );

  return (
    <button
      className="min-w-[109px] border-2 border-[#603CFF] dark:border-[#5C5470] text-[#603CFF] dark:text-[#DBD8E3] transition-all duration-300 rounded-lg px-3 py-1"
      onClick={() => handleCtgAdd(inputValue)}
    >
      {t("addBtn")}
    </button>
  );
}
