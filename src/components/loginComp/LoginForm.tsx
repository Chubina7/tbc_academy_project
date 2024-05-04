"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useTranslations } from "use-intl";

function LoginForm() {
  const t = useTranslations("Auth.login.form");
  const [problem, setProblem] = useState<{ type: string; message: string }>();
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signInHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (username?.trim() === "" && password?.trim() === "") {
      setProblem({
        type: "error",
        message: t("messages.empty"),
      });
    } else if (username?.trim() === "" || password?.trim() === "") {
      setProblem({
        type: "error",
        message: t("messages.fillBoth"),
      });
    } else {
      const userCredentials: IUserLoginInfo = { username, password };
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userCredentials),
      });
      const result = await res.json();

      router.replace("/");

      console.log(result);
    }
  };

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      method="POST"
      onSubmit={signInHandler}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="username">{t("usernameLabel")}</label>
        <input
          ref={usernameRef}
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={t("usernameInput")}
          type="text"
          name="username"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">{t("passwordLabel")}</label>
        <input
          ref={passwordRef}
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={t("passwordInput")}
          type="password"
          name="password"
        />
      </div>
      {problem && (
        <p className="italic text-red-700 text-sm">{problem.message}</p>
      )}
      <button className="w-full bg-white text-black rounded-full py-1">
        {t("signInBtn")}
      </button>
    </form>
  );
}

export default LoginForm;
