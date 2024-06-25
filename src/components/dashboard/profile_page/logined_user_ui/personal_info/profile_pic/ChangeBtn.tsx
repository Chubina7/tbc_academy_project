"use client";

import { useContext, useRef } from "react";
import { IoPencil } from "react-icons/io5";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function ChangeBtn() {
  const { setValue } = useContext(ctx);
  const browseRef = useRef<HTMLInputElement>(null);
  const t = useTranslations("dashboard.pages.profile.logined.pers.btns");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || file.type.split("/")[0] !== "image") {
      return;
    }

    setValue((prev) => ({ ...prev, profile: { ...prev.profile, file } }));
  };

  return (
    <>
      <input
        type="file"
        ref={browseRef}
        name="profile_picture"
        id="profile_picture"
        accept="image/*"
        hidden
        onChange={handleUpload}
      />
      <button
        className="flex gap-2 justify-center items-center"
        onClick={() => browseRef.current && browseRef.current.click()}
      >
        <IoPencil size={20} />
        <p>{t("edit")}</p>
      </button>
    </>
  );
}
