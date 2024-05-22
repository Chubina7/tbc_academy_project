"use client";

import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginBtn from "../LoginBtn";
import { validateLogin } from "../../../../../lib/helpers";

export default function Form() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // validate
    const validationResult = validateLogin(pass, email);
    if (validationResult) {
      setMessage(validationResult);
      return;
    }
    setMessage("");
    // make request to the database and redirect to the "/dashboard"
    // or send error message
  };

  return (
    <form className="w-full flex flex-col gap-2 mb-2">
      <EmailInput inputValueState={[email, setEmail]} />
      <PasswordInput inputValueState={[pass, setPass]} />
      <LoginBtn onClick={handleSubmit} />
      <div className="w-full h-5 text-right">
        <i className="text-sm text-red-700">{message}</i>
      </div>
    </form>
  );
}
