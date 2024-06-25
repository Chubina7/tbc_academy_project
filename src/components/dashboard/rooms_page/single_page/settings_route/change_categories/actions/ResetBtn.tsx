"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function ResetBtn() {
  const { handleReset } = useContext(ctx);
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.ctg"
  );

  return (
    <button
      className="px-3 py-1 rounded-lg border-2 border-[#603CFF] dark:border-[#5C5470] text-[#603CFF] dark:text-[#DBD8E3] transition-all duration-300"
      onClick={handleReset}
    >
      {t("reset")}
    </button>
  );
}
