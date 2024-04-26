import React from "react";
import NewEmail from "./NewEmail";
import NewPassword from "./NewPassword";

interface Props {
  loginInfoObj: {
    email: string | undefined;
    password: string;
  };
  dict: ITranslation;
}

export default function LoginInfo({ loginInfoObj, dict }: Props) {
  const { title, email, password } = dict.profile.loginInfo;

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <h1 className="w-full text-left text-2xl font-bold">{title}</h1>
      <div className="w-full md:max-w-3xl flex flex-col gap-6">
        <NewEmail data={loginInfoObj} dict={email} />
        <NewPassword data={loginInfoObj} dict={password} />
      </div>
    </div>
  );
}
