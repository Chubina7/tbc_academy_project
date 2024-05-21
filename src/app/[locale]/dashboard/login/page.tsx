import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";
import LoginForm from "../../../../components/auth/loginComp/LoginForm";
import ToRegisterAction from "../../../../components/auth/loginComp/ToRegisterAction";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

// Types
interface Props {
  params: IParams;
}

// Component
export default function LoginPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  if (cookies().has(AUTH_COOKIE_KEY)) {
    redirect(`/`); // possible to redirect to the previous requested page
  }
  const t = useTranslations("Auth");

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-16 sm:p-14 bg-inherit">
      <h1 className="text-4xl sm:text-5xl">{t("login.title")}</h1>
      <div className="flex flex-col gap-10 bg-gray-700 p-6 rounded-xl sm:text-xl">
        <LoginForm />
      </div>
      <ToRegisterAction />
    </main>
  );
}
