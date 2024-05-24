"use client";

import { useContext } from "react";
import { RegistrationInputsContext } from "../../../../../context/ctx";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function RoleCheckmark() {
  const { inputs } = useContext(RegistrationInputsContext);
  const { setValue } = inputs.roleState;

  return (
    <div className="w-full flex flex-col gap-2 select-none">
      <i className="w-full text-center">Are you STUDENT or TEACHER?</i>
      <span
        className={`w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-6 py-2 | text-md | transition-all duration-300 | hover:scale-105 | cursor-pointer | flex justify-between items-center ${
          inputs.roleState.value === "teacher" ? "opacity-100" : "opacity-60 "
        }`}
        onClick={() => {
          if (inputs.roleState.value === "teacher") {
            setValue("");
          } else {
            setValue("teacher");
          }
        }}
      >
        Teacher
        {inputs.roleState.value === "teacher" && (
          <IoCheckmarkOutline size={20} />
        )}
      </span>
      <span
        className={`w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-6 py-2 | text-md | transition-all duration-300 | hover:scale-105 | cursor-pointer | flex justify-between items-center ${
          inputs.roleState.value === "student" ? "opacity-100" : "opacity-60 "
        }`}
        onClick={() => {
          if (inputs.roleState.value === "student") {
            setValue("");
          } else {
            setValue("student");
          }
        }}
      >
        Student
        {inputs.roleState.value === "student" && (
          <IoCheckmarkOutline size={20} />
        )}
      </span>
    </div>
  );
}
