"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

interface Props {
  data: {
    email: string | undefined;
    password: string;
  };
}

export default function NewPassword({ data }: Props) {
  const t = useTranslations("Profile.loginInfo.password");
  const [loginInfo, setLoginInfo] = useState(data);
  const [isEditing, setIsEditing] = useState<boolean>();
  const [confirmInputVal, setConfirmInputVal] = useState<string>("");
  const [newInputVal, setNewInputVal] = useState<string>("");
  const [updated, setUpdated] = useState<boolean>(false);

  console.log(loginInfo);

  useEffect(() => {
    if (confirmInputVal === "" || confirmInputVal !== newInputVal) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [confirmInputVal, newInputVal, setIsEditing]);

  const handleSave = () => {
    setLoginInfo((prev) => ({ ...prev, password: confirmInputVal }));
    setConfirmInputVal("");
    setNewInputVal("");
    setUpdated(true);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <i className="opacity-60">{t("title")}</i>
        {updated && <p>{t("message")}</p>}
      </div>
      <div className="w-full flex flex-col gap-3">
        <input
          className="text-black w-full text-base border-2 border-black rounded-md px-3 py-2"
          placeholder={t("enterPass")}
          type="password"
          value={newInputVal}
          onChange={(e) => setNewInputVal(e.target.value)}
        />
        <input
          className="text-black w-full text-base border-2 border-black rounded-md px-3 py-2"
          placeholder={t("confirmPass")}
          type="password"
          value={confirmInputVal}
          onChange={(e) => setConfirmInputVal(e.target.value)}
        />
        {isEditing && (
          <button
            className="text-black bg-slate-500 text-inherit rounded-full px-3"
            onClick={handleSave}
          >
            {t("save")}
          </button>
        )}
      </div>
    </div>
  );
}