import React from "react";
import BirthDateInput from "./BirthDateInput";
import UsernameInput from "./UsernameInput";
import SurnameInput from "./SurnameInput";
import SaveBtn from "./SaveBtn";

export default function PersonalInfo() {
  return (
    <div className="w-full max-w-4xl bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 | flex flex-col justify-center items-start gap-5">
      <div className="w-full flex justify-between items-center gap-4">
        <h1 className="font-bold text-xl">Personal nformation</h1>
        <SaveBtn />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <BirthDateInput />
        <UsernameInput />
        <SurnameInput />
      </div>
    </div>
  );
}
