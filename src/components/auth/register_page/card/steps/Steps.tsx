"use client";

import RoleCheckmark from "./RoleCheckmark";
import PersonalDetailInputs from "./presonal_details/PersonalDetailInputs";
import CredentialInputs from "./acc_credentials/CredentialInputs";
import Heading from "./Heading";
import Controls from "./controls/Controls";
import { useContext } from "react";
import { RegistrationInputsContext } from "../../../../../context/ctx";

export default function Steps() {
  const { stepIdxState } = useContext(RegistrationInputsContext);
  const { step } = stepIdxState;

  return (
    <div className="w-full flex flex-col gap-4">
      <Heading subHeading={"TEST SUB HEADING"} />
      {
        [
          <RoleCheckmark key={0} />,
          <PersonalDetailInputs key={1} />,
          <CredentialInputs key={2} />,
        ][step]
      }
      <Controls />
    </div>
  );
}
