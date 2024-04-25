import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../lib/variables";
import { getDictionary } from "../../../lib/dictionary";
import RegisterForm from "../../../components/registerComp/RegisterForm";
import ToLoginAction from "../../../components/registerComp/ToLoginAction";

// Types
interface Props {
  params: IParams;
}

// Component
export default async function RegisterPage({ params: { locale } }: Props) {
  if (cookies().has(AUTH_COOKIE_KEY)) {
    redirect(`/${locale}`); // possible to redirect to the previous requested page
  }

  const dict = await getDictionary(locale);
  const title: string = dict.auth.register.title;
  const form: string = dict.auth.register.form;
  const info: string = dict.auth.register.info;

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-16 sm:p-14">
      <h1 className="text-4xl sm:text-5xl">{title}</h1>
      <div className="flex flex-col gap-10 bg-gray-700 p-6 rounded-xl sm:text-xl">
        <RegisterForm data={form} />
      </div>
      <ToLoginAction data={info} />
    </main>
  );
}
