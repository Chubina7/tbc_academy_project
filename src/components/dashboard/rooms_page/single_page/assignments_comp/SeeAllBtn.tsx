import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  num: number;
}

export default function SeeAllBtn({ num }: Props) {
  const t = useTranslations("dashboard.pages.rooms.singlePage");

  return (
    <div className="w-full text-center mb-1 p-3 pt-0">
      {num > 5 && (
        <Link
          href={`/dashboard/assignments`}
          className="hover:underline cursor-pointer"
        >
          {t("seeMore")} (+{num - 5})
        </Link>
      )}
    </div>
  );
}
