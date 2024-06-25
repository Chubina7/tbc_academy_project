import { useTranslations } from "next-intl";

interface Props {
  data: string;
}

export default function CreatedAt({ data }: Props) {
  const date = new Date(data);
  const t = useTranslations("dashboard.pages.rooms.singlePage");

  date.setHours(date.getHours() + 4);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <p className="w-full text-sm text-right mt-2">
      {t("createdAt")}: {formattedDate}
    </p>
  );
}
