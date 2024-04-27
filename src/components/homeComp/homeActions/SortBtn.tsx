import React from "react";
import { buttonUI } from "../../../lib/styles";
import { useTranslations } from "next-intl";

export default function SortBtn({ sortState }: { sortState: SortStateType }) {
  const t = useTranslations("Products.sortBtn");
  const { sortRule, setSortRule } = sortState;

  return (
    <button
      className={`sm:min-w-60 nowrap px-6 py-2 ${buttonUI} z-40 bg-[#F25050]`}
      onClick={() => setSortRule((prev) => !prev)}
    >
      {sortRule ? t("unSort") : t("sort")}
    </button>
  );
}
