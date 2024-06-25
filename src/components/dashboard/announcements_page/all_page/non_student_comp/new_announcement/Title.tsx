"use client";

import { useContext } from "react";
import { AddNewAnnouncementContext as newAnnCtx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function Title() {
  const { title, setTitle, setError } = useContext(newAnnCtx);
  const t = useTranslations("dashboard.pages.announcements.new");

  return (
    <input
      type="text"
      className="w-full px-3 py-1 border-2 focus:outline-none bg-transparent rounded-lg"
      placeholder={t("title")}
      value={title}
      onChange={(e) => {
        setError(false);
        setTitle(e.target.value);
      }}
    />
  );
}
