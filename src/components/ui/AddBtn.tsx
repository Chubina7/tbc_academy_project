import { useTranslations } from "next-intl";
import { IoAddCircleOutline } from "react-icons/io5";

interface Props {
  onClickAct: () => void;
}
export default function AddBtn({ onClickAct }: Props) {
  const t = useTranslations("dashboard.pages.rooms.singlePage");

  return (
    <div
      className="flex justify-center items-center gap-1  cursor-pointer rounded-full hover:underline transition-all duration-300 select-none"
      onClick={onClickAct}
    >
      <p className="hidden sm:block">{t("addBtn")}</p>
      <IoAddCircleOutline size={20} />
    </div>
  );
}
