"use client";

import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginBtn from "../LoginBtn";
import { detectEnviro, validateLogin } from "../../../../../lib/helpers";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const domain = detectEnviro();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate
    const validationResult = validateLogin(pass, email);
    if (validationResult) {
      setMessage(validationResult);
      return;
    }
    setMessage("");

    // Make request
    try {
      setIsLoading(true);
      const response = await fetch(`${domain}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password: pass }),
      });
      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message);
      } else {
        router.replace("/dashboard");
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to login. Check console for details");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full flex flex-col gap-2 mb-2" onSubmit={handleSubmit}>
      <EmailInput
        inputValueState={[email, setEmail]}
        loadingState={isLoading}
      />
      <PasswordInput
        inputValueState={[pass, setPass]}
        loadingState={isLoading}
      />
      <LoginBtn loadingState={isLoading} />
      <div className="w-full h-5 text-right">
        <i className="text-sm text-red-600">{message}</i>
      </div>
    </form>
  );
}
