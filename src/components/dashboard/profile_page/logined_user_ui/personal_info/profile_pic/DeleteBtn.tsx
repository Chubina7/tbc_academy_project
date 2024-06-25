"use client";

import { useContext } from "react";
import { IoTrash } from "react-icons/io5";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function DeleteBtn() {
  const { value, setValue } = useContext(ctx);
  const t = useTranslations("dashboard.pages.profile.logined.pers.btns");

  return (
    <button
      className="flex gap-2 justify-center items-center text-red-600 disabled:opacity-60"
      onClick={() =>
        setValue((prev) => ({
          ...prev,
          profile: { ...prev.profile, file: null, picture: "" },
        }))
      }
      disabled={value.profile.picture === ""}
    >
      <IoTrash size={20} />
      <p>{t("delete")}</p>
    </button>
  );
}
