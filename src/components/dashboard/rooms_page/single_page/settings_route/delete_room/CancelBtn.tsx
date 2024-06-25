import { useTranslations } from "next-intl";

interface Props {
  modalHandler: () => void;
  isLoading: boolean;
}

export default function CancelBtn({ modalHandler, isLoading }: Props) {
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.delete"
  );
  
  return (
    <button
      className={`px-3 py-1 border rounded-lg ${
        isLoading ? "opacity-60" : "opacity-100"
      }`}
      onClick={modalHandler}
      disabled={isLoading}
    >
      {t("cancel")}
    </button>
  );
}
