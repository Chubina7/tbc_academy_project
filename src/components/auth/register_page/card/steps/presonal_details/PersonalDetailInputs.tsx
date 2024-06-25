import { useTranslations } from "next-intl";
import BirthDate from "./BirthDate";
import SurnameInput from "./SurnameInput";
import UsernameInput from "./UsernameInput";

export default function PersonalDetailInputs() {
  const t = useTranslations(
    "dashboard.authorization.register.components.personalDetails"
  );

  return (
    <div className="w-full flex flex-col gap-3">
      <i className="w-full text-center">{t("title")}</i>
      <UsernameInput />
      <SurnameInput />
      <BirthDate />
    </div>
  );
}
