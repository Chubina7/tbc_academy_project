"use client";

import { useContext } from "react";
import { RegistrationInputsContext as ctx } from "../../../../../../context/ctx";
import { credentialsValidationMessage } from "../../../../../../lib/helpers";

export default function FinishBtn() {
  const { inputs, stepIdxState, messages } = useContext(ctx);
  const { step } = stepIdxState;
  const email = inputs.emailState.value;
  const pass = inputs.passwordState.value;
  const reTypedPass = inputs.reTypedPasswordState.value;
  const setValidationMessage = messages.credentialsMessage.setValue;
  const disable =
    step === 2 &&
    (email.trim() === "" || pass.trim() === "" || reTypedPass.trim() === "");

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // validate
    const validationResult = credentialsValidationMessage(
      email,
      pass,
      reTypedPass
    );
    if (validationResult) {
      setValidationMessage(validationResult);
      return;
    } else {
      setValidationMessage("");
    }
    // check if email is not unique
    // ...
    // make a call
    // ...
    // show error message
    // ...

    console.log({
      email: inputs.emailState.value,
      password: inputs.passwordState.value,
      reTypedPassword: inputs.reTypedPasswordState.value,
      surname: inputs.surnameState.value,
      username: inputs.usernameState.value,
      birthDate: inputs.birthDateState.value,
      role: inputs.roleState.value,
    });
  };

  if (step === 2) {
    return (
      <button
        className={`w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300 | ${
          disable
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer opacity-100"
        }`}
        onClick={handleSubmit}
        disabled={disable}
      >
        Finish
      </button>
    );
  } else {
    return null;
  }
}
