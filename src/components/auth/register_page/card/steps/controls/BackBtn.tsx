import React, { useContext } from "react";
import { RegistrationInputsContext } from "../../../../../../context/ctx";

export default function BackBtn() {
  const { stepIdxState } = useContext(RegistrationInputsContext);
  const { step, setStep } = stepIdxState;

  if (step === 0) return null;

  return (
    <button
      className="w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300"
      onClick={() => setStep((prev) => prev - 1)}
    >
      Back
    </button>
  );
}