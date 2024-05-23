"use client";

import { useContext } from "react";
import { RegistrationInputsContext } from "../../../../../../context/ctx";

export default function NextBtn() {
  const { stepIdxState, inputs } = useContext(RegistrationInputsContext);
  const { step, setStep } = stepIdxState;
  const disable =
    (step === 0 && inputs.roleState.value === "") ||
    (step === 1 && inputs.usernameState.value === "");

  if (step === 2) return null;

  return (
    <button
      className={`w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300 | ${
        disable
          ? "cursor-not-allowed opacity-60"
          : " cursor-pointer opacity-100"
      }`}
      onClick={() => setStep((prev) => prev + 1)}
      disabled={disable}
    >
      Next
    </button>
  );
}
