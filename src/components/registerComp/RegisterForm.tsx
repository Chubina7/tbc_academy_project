import { useTranslations } from "next-intl";
import React from "react";

function RegisterForm() {
  const t = useTranslations("Auth.register.form");
  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      action=""
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="username">{t("usernameLabel")}</label>
        <input
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
          className="bg-transparent border-2 border-white py-1 px-3"
          type="password"
          name="password"
          id="password"
          placeholder={t("passwordInput")}
        />
        <input
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
