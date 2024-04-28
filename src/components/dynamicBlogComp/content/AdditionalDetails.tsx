import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  time: number;
  calories: number | undefined;
}

function AdditionalDetails({ time, calories }: Props) {
  const t = useTranslations("Blog.blogDynamicItem.content");
  return (
    <div className="w-full flex flex-col items-start justify-start gap-3">
      <h1 className="text-xl md:text-2xl">{t("otherDetails")}: </h1>
      <div className="flex flex-col gap-2">
        <i>
          {t("cookTime")}: <strong>{time}</strong> {t("minute")}
        </i>
        <i>
          {t("calories")}: <strong>{calories}</strong> {t("calorie")}
        </i>
      </div>
    </div>
  );
}

export default AdditionalDetails;
