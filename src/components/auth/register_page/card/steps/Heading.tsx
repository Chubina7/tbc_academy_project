"use client";

import React, { useContext } from "react";
import { registrationSteps } from "../../../../../lib/lists/ListsWithComponents";
import { RegistrationInputsContext } from "../../../../../context/ctx";

const Heading = () => {
  const { stepIdxState } = useContext(RegistrationInputsContext);
  const { step } = stepIdxState;

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 mb-8">
      <h1 className="text-4xl font-bold">REGISTER</h1>
      <p className="w-full text-center">{registrationSteps[step].heading}</p>
    </div>
  );
};

export default React.memo(Heading);
