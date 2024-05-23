"use client";

import React, { useState } from "react";
import { RegistrationInputsContext } from "../ctx";

interface Props {
  children: React.ReactNode;
}

export default function RegistrationProvider({ children }: Props) {
  const [role, setRole] = useState<RoleType>("student");
  const [username, setUsername] = useState<string>("");
  const [surname, setSurname] = useState<RegSurnameType>("");
  const [age, setAge] = useState<RegAgeType>(Number(""));
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [step, setStep] = useState(0);

  return (
    <RegistrationInputsContext.Provider
      value={{
        inputs: {
          roleState: {
            value: role,
            setValue: setRole,
          },
          usernameState: {
            value: username,
            setValue: setUsername,
          },
          surnameState: {
            value: surname,
            setValue: setSurname,
          },
          ageState: {
            value: age,
            setValue: setAge,
          },
          emailState: {
            value: email,
            setValue: setEmail,
          },
          passwordState: {
            value: password,
            setValue: setPassword,
          },
        },
        stepIdxState: { step, setStep },
      }}
    >
      {children}
    </RegistrationInputsContext.Provider>
  );
}
