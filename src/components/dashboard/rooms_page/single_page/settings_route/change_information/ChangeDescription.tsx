"use client";

import { useContext } from "react";
import { EditRoomInformationContext } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function ChangeDescription() {
  const { details, setDetails } = useContext(EditRoomInformationContext);
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.info"
  );

  return (
    <textarea
      className="border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
      placeholder={t("roomDesc")}
      value={details.description}
      onChange={(e) =>
        setDetails((prev) => ({ ...prev, description: e.target.value }))
      }
      spellCheck={false}
    />
  );
}
