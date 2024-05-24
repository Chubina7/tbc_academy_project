"use client";

import { useContext, useState } from "react";
import { RegistrationInputsContext as ctx } from "../../../../../../context/ctx";
import { credentialsValidationMessage } from "../../../../../../lib/helpers";
import { useRouter } from "next/navigation";

export default function FinishBtn() {
  const { inputs, stepIdxState, messages } = useContext(ctx);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { step } = stepIdxState;
  const email = inputs.emailState.value;
  const pass = inputs.passwordState.value;
  const reTypedPass = inputs.reTypedPasswordState.value;
  const setMessage = messages.credentialsMessage.setValue;
  const disable =
    step === 2 &&
    (email.trim() === "" || pass.trim() === "" || reTypedPass.trim() === "");

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const validationResult = credentialsValidationMessage(
      email,
      pass,
      reTypedPass
    );
    if (validationResult) {
      setMessage(validationResult);
      return;
    } else {
      setMessage("");
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: inputs.usernameState.value,
          email: inputs.emailState.value,
          password: inputs.passwordState.value,
          role: inputs.roleState.value,
          birth_date: inputs.birthDateState.value,
          surname: inputs.surnameState.value,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message);
        console.error(result.error);
      } else {
        router.replace("/dashboard");
      }
    } catch (error) {
      console.error(error);
      setMessage("Client side error occured! Check console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  if (step === 2) {
    return (
      <button
        className={`w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300 | ${
          disable || isLoading
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer opacity-100"
        }`}
        onClick={handleSubmit}
        disabled={disable}
      >
        {isLoading ? "Registrating..." : "Finish"}
      </button>
    );
  } else {
    return null;
  }
}