import { useTranslations } from "next-intl";

interface Props {
  due: string;
}

export default function Due({ due }: Props) {
  const date = new Date(due);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const t = useTranslations("dashboard.pages.rooms.singlePage");

  return (
    <p>
      {t("dueTo")} {`${day}/${month}/${year}`}
    </p>
  );
}
