"use client";

import { useContext } from "react";
import { EditRoomInformationContext } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function ChangeTitle() {
  const { details, setDetails } = useContext(EditRoomInformationContext);
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.info"
  );

  return (
    <input
      className="border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
      type="text"
      placeholder={t("roomTitlePh")}
      value={details.title}
      onChange={(e) =>
        setDetails((prev) => ({ ...prev, title: e.target.value }))
      }
    />
  );
}
