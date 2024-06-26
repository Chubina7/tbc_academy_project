"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";

interface Props {
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BrowseBtn({ action }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.pict"
  );

  const handleFileBrowsing = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <input
        type="file"
        name="cover_picture"
        id="cover_picture"
        hidden
        accept="image/*"
        ref={inputRef}
        onChange={action}
      />
      <button
        className="px-3 py-1 border rounded-lg select-none text-nowrap"
        id="cover_picture"
        name="cover_picture"
        onClick={handleFileBrowsing}
      >
        {t("browseBtn")}
      </button>
    </>
  );
}
