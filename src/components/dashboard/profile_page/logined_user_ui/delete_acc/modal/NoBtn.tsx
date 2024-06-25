import { useTranslations } from "next-intl";

interface Props {
  closeModal: () => void;
  isLoading: boolean;
}

export default function NoBtn({ closeModal, isLoading }: Props) {
  const t = useTranslations("dashboard.pages.profile.logined.deleteAcc.modal");

  return (
    <button
      onClick={closeModal}
      className={`px-3 py-1 rounded-lg border-2 border-[#603CFF] text-[#603CFF] dark:border-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 font-bold text-sm ${
        isLoading ? "opacity-60" : "opacity-100"
      }`}
      disabled={isLoading}
    >
      {t("noBtn")}
    </button>
  );
}
