import Link from "next/link";
import { useTranslations } from "next-intl";

interface Props {
  num: number;
}

export default function SeeAllBtn({ num }: Props) {
  const t = useTranslations("dashboard.pages.rooms.singlePage");

  return (
    <p className="w-full sm:h-9 text-center mb-1 p-3 pt-0">
      {num > 5 && (
        <Link
          href={`/dashboard/announcements`}
          className="hover:underline cursor-pointer"
        >
          {t("seeMore")} (+{num - 5})
        </Link>
      )}
    </p>
  );
}
