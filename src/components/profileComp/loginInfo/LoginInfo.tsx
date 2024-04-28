import React from "react";
import NewEmail from "./NewEmail";
import NewPassword from "./NewPassword";
import { useTranslations } from "next-intl";

interface Props {
  loginInfoObj: {
    email: string | undefined;
    password: string;
  };
}

export default function LoginInfo({ loginInfoObj }: Props) {
  const t = useTranslations("Profile.loginInfo");

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <h1 className="w-full text-left text-2xl font-bold">{t("title")}</h1>
      <div className="w-full md:max-w-3xl flex flex-col gap-6">
        <NewEmail data={loginInfoObj} />
        <NewPassword data={loginInfoObj} />
      </div>
    </div>
  );
}
