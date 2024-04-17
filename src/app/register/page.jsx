import React from "react";
import RegisterForm from "../../components/registerComp/RegisterForm";
import SignUpBtn from "../../components/registerComp/SignUpBtn";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_KEY } from "../../lib/variables";

export default function RegisterPage() {
  if (cookies().has(AUTH_COOKIE_KEY)) {
    redirect("/"); // possible to redirect to the previous requested page
  }

  return (
    <main className="relative w-full h-screen flex flex-col justify-center items-center">
      <h1 className="absolute text-4xl top-16 left-auto">Register</h1>
      <div className="flex flex-col gap-10 bg-gray-700 p-6 rounded-xl">
        <RegisterForm />
        <SignUpBtn />
      </div>
    </main>
  );
}
