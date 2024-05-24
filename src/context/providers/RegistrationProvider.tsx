"use client";

import React, { useEffect, useState } from "react";
import { RegistrationInputsContext } from "../ctx";
import { minimumDatePrevention } from "../../lib/helpers";

interface Props {
  children: React.ReactNode;
}

export default function RegistrationProvider({ children }: Props) {
  // input states
  const [role, setRole] = useState<RoleType | "">("");
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reTypedPassword, setReTypedPassword] = useState("");

  // steps state
  const [step, setStep] = useState(0);

  // messages
  const [credentialsMessage, setCredentialsMessage] = useState("");

  useEffect(() => {
    setCredentialsMessage("");
  }, [email, password, reTypedPassword]);

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
        messages: {
          credentialsMessage: {
            value: credentialsMessage,
            setValue: setCredentialsMessage,
          },
        },
      }}
    >
      {children}
    </RegistrationInputsContext.Provider>
  );
}
