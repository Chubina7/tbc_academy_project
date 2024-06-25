"use client";

import { useContext } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function Surname() {
  const { value, setValue } = useContext(ctx);
  const t = useTranslations("dashboard.pages.profile.logined.pers.surname");

  return (
    <div className="w-full flex flex-col gap-2 justify-start items-start ">
      <label htmlFor="surname">{t("label")}</label>
      <input
        id="surname"
        type="text"
        className="w-full px-3 py-1 rounded-lg bg-transparent border-2 focus:outline-none"
        placeholder={t("input")}
        value={value.surname || ""}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, surname: e.target.value }))
        }
      />
    </div>
  );
}
