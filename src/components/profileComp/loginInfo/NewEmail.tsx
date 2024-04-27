"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

interface Props {
  data: {
    email: string | undefined;
    password: string;
  };
}

export default function NewEmail({ data }: Props) {
  const t = useTranslations("Profile.loginInfo.email");
  const [loginInfo, setLoginInfo] = useState(data);
  const [isEditing, setIsEditing] = useState<boolean>();
  const [inputVal, setInputVal] = useState<string>("");

  useEffect(() => {
    if (inputVal === "" || !inputVal.includes("@") || !inputVal.includes(".")) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [inputVal]);

  const handleSave = () => {
    setLoginInfo((prev) => ({ ...prev, email: inputVal }));
    setInputVal("");
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <i className="opacity-60">{t("title")}</i>
        <p>
          {t("current")}:{" "}
          <span className="italic">
            {loginInfo.email}{" "}
            {isEditing && (
              <button
                className="bg-slate-500 text-inherit rounded-full px-3"
                onClick={handleSave}
              >
                {t("save")}
              </button>
            )}
          </span>
        </p>
      </div>
      <input
        className="w-full text-black text-base border-2 border-black rounded-md px-3 py-2"
        type="email"
        placeholder={t("emailPh")}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
}
