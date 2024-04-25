"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";

function LoginForm({ data }: { data: any }) {
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const {
    usernameLabel,
    usernameInput,
    passwordLabel,
    passwordInput,
    signInBtn,
  } = data;

  const signInHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    // Validate input
    // ...

    try {
      const data: IUserLoginInfo = { username, password };

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const parsed: LoginResponse = await res.json();

      if (parsed.status === 200) {
        router.refresh();
        console.log(parsed.message);
      } else {
        // Showing appropriate UI
        console.error(parsed.message);
      }
    } catch (error) {
      // Showing appropriate UI
      console.error("An error occurred:", error);
    }
  };

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      method="POST"
      onSubmit={signInHandler}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="username">{usernameLabel}</label>
        <input
          ref={usernameRef}
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={usernameInput}
          type="text"
          name="username"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">{passwordLabel}</label>
        <input
          ref={passwordRef}
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={passwordInput}
          type="password"
          name="password"
        />
      </div>
      <button className="w-full bg-white text-black rounded-full py-1">
        {signInBtn}
      </button>
    </form>
  );
}

export default LoginForm;
