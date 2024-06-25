"use client";

import { useContext, useEffect } from "react";
import { RoomsListFilterContext as ctx } from "../../../../context/ctx";
import { useTranslations } from "next-intl";

interface Props {
  filters: Array<string>;
}

export default function RoomsFilter({ filters }: Props) {
  const { selectedCategories, setSelectedCategories } = useContext(ctx);
  const t = useTranslations("dashboard.pages.rooms");
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setSelectedCategories(["all"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  // checkeer functoin
  const isInList = (ctg: string) => {
    return selectedCategories.includes(ctg);
  };
  // styles
  const styles = (ctg: string) => {
    const baseStyle =
      "bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm hover:cursor-pointer transition-all duration-300 select-none opacity-100 text-nowrap min-w-[85px] text-center";
    const unActiveStl = " opacity-60 hover:opacity-80 ";
    return isInList(ctg) ? baseStyle : unActiveStl + baseStyle;
  };
  // onClick handler
  const handleCategorySelection = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((ctg) => ctg !== category));
    } else {
      setSelectedCategories((prev) => [
        ...prev.filter((ctg) => ctg !== "all"),
        category,
      ]);
    }
  };

  return (
    <ul className="w-full flex gap-3 items-center overflow-x-scroll scroll-hidden">
      {filters.length > 1 && (
        <li
          className={styles("all")}
          onClick={() => !isInList("all") && setSelectedCategories(["all"])}
        >
          {t("all")}
        </li>
      )}
      {filters.map((category, idx) => {
        const word = category.charAt(0).toUpperCase() + category.slice(1);
        const className = styles(category);
        const handler = () => handleCategorySelection(category);

        return (
          <li key={idx} className={className} onClick={handler}>
            {word}
          </li>
        );
      })}
    </ul>
  );
}
