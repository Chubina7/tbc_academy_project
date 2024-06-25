import { useTranslations } from "next-intl";

interface Props {
  deleteHandler: () => void;
}
export default function DeleteBtn({ deleteHandler }: Props) {
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.pict"
  );
  return (
    <button className="bg-red-600 rounded-lg px-3 py-1" onClick={deleteHandler}>
      {t("delete")}
    </button>
  );
}
