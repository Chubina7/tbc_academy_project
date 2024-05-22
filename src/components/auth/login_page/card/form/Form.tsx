"use client";

import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginBtn from "../LoginBtn";

export default function Form() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [pass, setPass] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // validate
    // make request to the database
    // redirect to the "/dashboard"
    // or send error message
  };

  return (
    <form className="w-full flex flex-col gap-2 mb-2" onSubmit={handleSubmit}>
      <EmailInput
        inputValueState={[email, setEmail]}
        isValidState={[isEmailValid, setIsEmailValid]}
      />
      <PasswordInput state={[pass, setPass]} />
      <LoginBtn />
      <div className="w-full h-5 text-right">
        {isEmailValid && (
          <i className="text-sm text-red-700">
            {/* Email should include one `@` and `.` symbols */}
            SOMETHING IS INVALID
          </i>
        )}
      </div>
    </form>
  );
}
