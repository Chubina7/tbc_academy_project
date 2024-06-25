"use client";

import React, { useContext } from "react";
import { RegistrationInputsContext } from "../../../../context/ctx";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ToLogin() {
  const { inputs } = useContext(RegistrationInputsContext);
  const router = useRouter();
  const t = useTranslations("dashboard.authorization.register.toLogin");

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
      {t("text")}{" "}
      <span className="underline cursor-pointer" onClick={handleRoute}>
        {t("here")}
      </span>
    </p>
  );
}
