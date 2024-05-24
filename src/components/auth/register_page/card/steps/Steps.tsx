"use client";

import Controls from "./controls/Controls";
import { useContext } from "react";
import { RegistrationInputsContext } from "../../../../../context/ctx";
import { registrationSteps } from "../../../../../lib/ListsWithComponents";

export default function Steps() {
  const { stepIdxState } = useContext(RegistrationInputsContext);
  const { step } = stepIdxState;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full h-56 flex justify-center items-start">
        {registrationSteps[step].component}
      </div>
      <Controls />
    </div>
  );
}
