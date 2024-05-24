"use client";

import React, { useState } from "react";
import { RegistrationInputsContext } from "../ctx";

interface Props {
  children: React.ReactNode;
}

const minimumDatePrevention = () => {
  const today = new Date();
  const minimumDate = new Date(today.setFullYear(today.getFullYear() - 18));
  const minimumAge = minimumDate.toISOString().split("T")[0];

  return minimumAge;
};

export default function RegistrationProvider({ children }: Props) {
  // input states
  const [role, setRole] = useState<RoleType | "">("");
  const [username, setUsername] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [reTypedPassword, setReTypedPassword] = useState<string>("");

  // steps state
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
          birthDateState: {
            value: birthDate,
            setValue: setBirthDate,
            max: minimumDatePrevention(),
          },
          emailState: {
            value: email,
            setValue: setEmail,
          },
          passwordState: {
            value: password,
            setValue: setPassword,
          },
          reTypedPasswordState: {
            value: reTypedPassword,
            setValue: setReTypedPassword,
          },
        },
        stepIdxState: { step, setStep },
      }}
    >
      {children}
    </RegistrationInputsContext.Provider>
  );
}
