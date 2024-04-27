import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../lib/variables";
import RegisterForm from "../../../components/registerComp/RegisterForm";
import ToLoginAction from "../../../components/registerComp/ToLoginAction";
import { useTranslations } from "next-intl";

// Types
interface Props {
  params: IParams;
}

// Component
export default function RegisterPage({ params: { locale } }: Props) {
  if (cookies().has(AUTH_COOKIE_KEY)) {
    redirect(`/${locale}`); // possible to redirect to the previous requested page
  }
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
