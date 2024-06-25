"use client";

import { useContext } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function Username() {
  const { value, setValue } = useContext(ctx);
  const t = useTranslations("dashboard.pages.profile.logined.pers.username");

  return (
    <div className="w-full flex flex-col gap-2 justify-start items-start ">
      <label htmlFor="username">{t("label")}</label>
      <input
        id="username"
        type="text"
        className="w-full px-3 py-1 rounded-lg bg-transparent border-2 focus:outline-none"
        placeholder={t("input")}
        value={value.username}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, username: e.target.value }))
        }
      />
    </div>
  );
}
