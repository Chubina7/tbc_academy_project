"use client";

import React, { useContext } from "react";
import { RegistrationInputsContext } from "../../../../context/ctx";
import { useRouter } from "next/navigation";

export default function ToLogin() {
  const { inputs } = useContext(RegistrationInputsContext);
  const router = useRouter();

  const handleRoute = () => {
    if (
      inputs.emailState.value !== "" ||
      inputs.passwordState.value !== "" ||
      inputs.reTypedPasswordState.value !== "" ||
      inputs.roleState.value !== "" ||
      inputs.usernameState.value !== ""
    ) {
      alert("INSERTED VALUES WILL BE LOST");
      router.push("/dashboard/login");
    } else {
      router.push("/dashboard/login");
    }
  };

  return (
    <p>
      If you already have account, Log In{" "}
      <span className="underline cursor-pointer" onClick={handleRoute}>
        here
      </span>
    </p>
  );
}
