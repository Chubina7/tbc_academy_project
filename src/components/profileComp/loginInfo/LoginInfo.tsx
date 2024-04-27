import React from "react";
import NewEmail from "./NewEmail";
import NewPassword from "./NewPassword";

interface Props {
  loginInfoObj: {
    email: string | undefined;
    password: string;
  };
}

export default function LoginInfo({ loginInfoObj }: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <h1 className="w-full text-left text-2xl font-bold">
        {"dict.profile.loginInfo.title"}
      </h1>
      <div className="w-full md:max-w-3xl flex flex-col gap-6">
        <NewEmail data={loginInfoObj} dict={"dict.profile.loginInfo.email"} />
        <NewPassword
          data={loginInfoObj}
          dict={"dict.profile.loginInfo.password"}
        />
      </div>
    </div>
  );
}
