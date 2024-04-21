import React from "react";
import { signIn } from "../../lib/actions";

function LoginForm({ data }) {
  const {
    usernameLabel,
    usernameInput,
    passwordLabel,
    passwordInput,
    signInBtn,
  } = data;

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      action={signIn}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="username">{usernameLabel}</label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={usernameInput}
          type="text"
          name="username"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">{passwordLabel}</label>
        <input
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
