"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Appear from "../../../ui/framerMotionDivs/Appear";

export default function Heading() {
  const [idx, setIdx] = useState(0);
  const t = useTranslations("dashboard.authorization.login");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIdx((idx + 1) % 2);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [idx]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 mb-8">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <p>{t("welcome.text")}</p>
        {idx === 0 ? (
          <Appear key={1} className="transition-colors duration-300 font-bold">
            {t("welcome.role.student")}
          </Appear>
        ) : (
          <Appear key={0} className="transition-colors duration-300 font-bold">
            {t("welcome.role.teacher")}
          </Appear>
        )}
      </div>
    </div>
  );
}
