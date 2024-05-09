import React from "react";
import { useTranslations } from "next-intl";

export default function SortBtn({ sortState }: { sortState: SortStateType }) {
  const t = useTranslations("Products.sortBtn");
  const { sortRule, setSortRule } = sortState;

  return (
    <button
      className="sm:min-w-60 nowrap px-6 py-2 rounded-full font-bold text-[#EEE8F6] bg-[#3D52A1] dark:bg-[#EEE8F6] dark:text-[#3D52A1] transition-all duration-300"
      onClick={() => setSortRule((prev) => !prev)}
    >
      {sortRule ? t("unSort") : t("sort")}
    </button>
  );
}
