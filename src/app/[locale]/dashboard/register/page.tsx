import React from "react";
import RegisterForm from "../../../../components/auth/registerComp/RegisterForm";
import ToLoginAction from "../../../../components/auth/registerComp/ToLoginAction";
import { useTranslations } from "next-intl";

export default function RegisterPage() {
  const t = useTranslations("Auth.register");

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-16 sm:p-14">
      <h1 className="text-4xl sm:text-5xl">{t("title")}</h1>
      <div className="flex flex-col gap-10 bg-gray-700 p-6 rounded-xl sm:text-xl">
        <RegisterForm />
      </div>
      <ToLoginAction />
    </main>
  );
}
