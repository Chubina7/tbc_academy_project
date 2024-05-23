"use client";

import React, { useContext } from "react";
import RoleCheckmark from "./RoleCheckmark";
import PersonalDetailInputs from "./presonal_details/PersonalDetailInputs";
import CredentialInputs from "./acc_credentials/CredentialInputs";
import Heading from "./Heading";
import FinishBtn from "./FinishBtn";
import { RegistrationInputsContext } from "../../../../../context/ctx";

export default function Steps() {
  const {
    ageState,
    emailState,
    passwordState,
    roleState,
    surnameState,
    usernameState,
  } = useContext(RegistrationInputsContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      age: ageState.value,
      email: emailState.value,
      password: passwordState.value,
      role: roleState.value,
      surname: surnameState.value,
      username: usernameState.value,
    });
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <Heading subHeading={"TEST SUB HEADING"} />
      <RoleCheckmark />
      <PersonalDetailInputs />
      <CredentialInputs />
      <FinishBtn />
    </form>
  );
}
