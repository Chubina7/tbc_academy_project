import React from "react";
import RegisterForm from "../../components/registerComp/RegisterForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_KEY } from "../../lib/variables";
import ToLoginAction from "../../components/registerComp/ToLoginAction";

export default function RegisterPage() {
  if (cookies().has(AUTH_COOKIE_KEY)) {
    redirect("/"); // possible to redirect to the previous requested page
  }

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-16 sm:p-14">
      <h1 className="text-4xl sm:text-5xl">Register</h1>
      <div className="flex flex-col gap-10 bg-gray-700 p-6 rounded-xl sm:text-xl">
        <RegisterForm />
      </div>
      <ToLoginAction />
    </main>
  );
}
