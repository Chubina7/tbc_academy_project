"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef } from "react";

function RegisterForm() {
  const t = useTranslations("Auth.register.form");
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const reTypePasswordRef = useRef<HTMLInputElement>(null);

  const registerHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get input values
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    // Validate input values
    // ...

    try {
      const user = { username, email, password };
      const res = await fetch(
        `http://localhost:3000/api/auth/register?username=${username}&email=${email}&password=${password}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const result = await res.json();

      if (res.ok) {
        router.replace("/");
        console.log(result.users.rows);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      method="POST"
      onSubmit={registerHandler}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="username">{t("usernameLabel")}</label>
        <input
          ref={usernameRef}
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={t("usernameInput")}
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">{t("emailLabel")}</label>
        <input
          ref={emailRef}
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={t("emailInput")}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">{t("passwordLabel")}</label>
        <input
          ref={passwordRef}
          className="bg-transparent border-2 border-white py-1 px-3"
          type="password"
          name="password"
          id="password"
          placeholder={t("passwordInput")}
        />
        <input
          ref={reTypePasswordRef}
          className="bg-transparent border-2 border-white py-1 px-3"
          type="password"
          name="password"
          id="password"
          placeholder={t("rePasswordInput")}
        />
      </div>
      <button className="w-full bg-white text-black rounded-full py-1">
        {t("signUpBtn")}
      </button>
    </form>
  );
}

export default RegisterForm;
