"use client";

import { useContext } from "react";
import { AddNewAnnouncementContext as newAnnCtx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function Announcement() {
  const { announcement, setAnnouncement, setError } = useContext(newAnnCtx);
  const t = useTranslations("dashboard.pages.announcements.new");

  return (
    <textarea
      name="new_announcement"
      id="new_announcement"
      placeholder={t("desc")}
      rows={5}
      className="w-full bg-transparent border-2 rounded-lg focus:outline-none p-3 resize-none"
      value={announcement}
      onChange={(e) => {
        setError(false);
        setAnnouncement(e.target.value);
      }}
      spellCheck={false}
    />
  );
}
