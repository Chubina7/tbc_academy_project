import React from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SaveBtn from "./SaveBtn";

export default function LoginInfo() {
  return (
    <div className="w-full max-w-4xl bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 | flex flex-col justify-center items-start gap-5">
      <div className="w-full flex justify-between items-center gap-4">
        <h1 className="font-bold text-xl">Login Information</h1>
        <SaveBtn />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <EmailInput />
        <PasswordInput />
      </div>
    </div>
  );
}
