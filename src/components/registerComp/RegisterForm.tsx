import React from "react";

function RegisterForm() {
  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      action=""
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="username">
          {"dict.auth.register.form.usernameLabel"}
        </label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={"dict.auth.register.form.usernameInput"}
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">{"dict.auth.register.form.emailLabel"}</label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          placeholder={"dict.auth.register.form.emailInput"}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">
          {"dict.auth.register.form.passwordLabel"}
        </label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          type="password"
          name="password"
          id="password"
          placeholder={"dict.auth.register.form.passwordInput"}
        />
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          type="password"
          name="password"
          id="password"
          placeholder={"dict.auth.register.form.rePasswordInput"}
        />
      </div>
      <button className="w-full bg-white text-black rounded-full py-1">
        {"dict.auth.register.form.signUpBtn"}
      </button>
    </form>
  );
}

export default RegisterForm;
