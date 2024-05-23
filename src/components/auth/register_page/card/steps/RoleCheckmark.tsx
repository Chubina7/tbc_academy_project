"use client";

import { useContext } from "react";
import { RegistrationInputsContext } from "../../../../../context/ctx";

export default function RoleCheckmark() {
  const { roleState } = useContext(RegistrationInputsContext);
  const { setValue } = roleState;

  return (
    <div className="w-full flex flex-col gap-2">
      <i className="w-full text-right">Select your role</i>
      <span
        className="w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300 | opacity-60 hover:opacity-100"
        onClick={() => setValue("teacher")}
      >
        Teacher
      </span>
      <span
        className="w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300 | opacity-60 hover:opacity-100"
        onClick={() => setValue("student")}
      >
        Student
      </span>
    </div>
  );
}
