import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  loadingState: boolean;
}

const LoginBtn = ({ loadingState }: Props) => {
  const t = useTranslations("dashboard.authorization.login.form");
  return (
    <button
      className={`w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300 | opacity-60 hover:opacity-100 | ${
        loadingState ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={loadingState}
    >
      {loadingState ? t("btn.loading") : t("btn.static")}
    </button>
  );
};

export default React.memo(LoginBtn);
