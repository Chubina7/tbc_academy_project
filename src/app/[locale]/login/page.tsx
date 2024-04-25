import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_KEY } from "../../../lib/variables";
import { getDictionary } from "../../../lib/dictionary";
import LoginForm from "../../../components/loginComp/LoginForm";
import ToRegisterAction from "../../../components/loginComp/ToRegisterAction";
import ThemeChange from "../../../components/header/ThemeChange";

// Types
interface Props {
  params: IParams;
}

// Component
export default async function LoginPage({ params: { locale } }: Props) {
  if (cookies().has(AUTH_COOKIE_KEY)) {
    redirect(`/${locale}`); // possible to redirect to the previous requested page
  }

  const dict = await getDictionary(locale);
  const title: string = dict.auth.login.title;
  const form: string = dict.auth.login.form;
  const info: string = dict.auth.login.info;

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-16 sm:p-14 bg-white dark:bg-[#25292D]">
      <h1 className="text-4xl sm:text-5xl">{title}</h1>
      <div className="flex flex-col gap-10 bg-gray-700 p-6 rounded-xl sm:text-xl">
        <LoginForm data={form} />
      </div>
      <ThemeChange />
      <ToRegisterAction data={info} />
    </main>
  );
}
