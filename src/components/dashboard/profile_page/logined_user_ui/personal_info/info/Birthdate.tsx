"use client";

import { useContext } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function Birthdate() {
  const { value, setValue } = useContext(ctx);
  const t = useTranslations("dashboard.pages.profile.logined.pers.birthdate");

  return (
    <div className="w-full flex flex-col gap-2 justify-start items-start ">
      <label htmlFor="birthdate">{t("label")}</label>
      <input
        id="birthdate"
        type="date"
        placeholder={t("input")}
        className="w-full px-3 py-1 rounded-lg bg-transparent border-2 focus:outline-none"
        max={new Date().toISOString().split("T")[0]}
        value={value.birth_date || ""}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, birth_date: e.target.value }))
        }
      />
    </div>
  );
}
