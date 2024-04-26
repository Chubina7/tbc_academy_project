import React from "react";

function RegisterForm({
  data,
}: {
  data: {
    usernameLabel: string;
    usernameInput: string;
    emailLabel: string;
    emailInput: string;
    passwordLabel: string;
    passwordInput: string;
    rePasswordInput: string;
    signUpBtn: string;
  };
}) {
  const {
    usernameLabel,
    usernameInput,
    emailLabel,
    emailInput,
    passwordLabel,
    passwordInput,
    rePasswordInput,
    signUpBtn,
  } = data;

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      action=""
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="username">{usernameLabel}</label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={usernameInput}
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">{emailLabel}</label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={emailInput}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">{passwordLabel}</label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          type="password"
          name="password"
          id="password"
          placeholder={passwordInput}
        />
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          type="password"
          name="password"
          id="password"
          placeholder={rePasswordInput}
        />
      </div>
      <button className="w-full bg-white text-black rounded-full py-1">
        {signUpBtn}
      </button>
    </form>
  );
}

export default RegisterForm;
