"use client";

import React, { useContext } from "react";
import { registrationSteps } from "../../../../../lib/lists/ListsWithComponents";
import { RegistrationInputsContext } from "../../../../../context/ctx";
import { useTranslations } from "next-intl";

const Heading = () => {
  const { stepIdxState } = useContext(RegistrationInputsContext);
  const { step } = stepIdxState;
  const t = useTranslations("dashboard.authorization.register");

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 mb-8">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="w-full text-center">
        {t(`steps.${registrationSteps[step].ph}`)}
      </p>
    </div>
  );
};

export default React.memo(Heading);
