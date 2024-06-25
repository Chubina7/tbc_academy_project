import { useTranslations } from "next-intl";

export default function Info() {
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.delete.info"
  );

  return (
    <>
      <h1 className="w-full font-bold text-2xl">{t("title")}</h1>
      <p>{t("warning")}</p>
      <ul className="list-disc pl-6">
        <li>{t("members")}</li>
        <li>{t("resources")}</li>
        <li>{t("assignments")}</li>
        <li>{t("grades")}</li>
      </ul>
      <p>
        {t("warnpart1")} <span className="font-bold">{t("warnpart2")}</span>!
      </p>
    </>
  );
}
