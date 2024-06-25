import { useTranslations } from "next-intl";
import Link from "next/link";
import { GoDownload } from "react-icons/go";

interface Props {
  link: string;
}

export default function DownloadBtn({ link }: Props) {
  const t = useTranslations("dashboard.pages.bookshelf.singlePage");

  return (
    <div className="w-full flex justify-end items-center">
      <Link
        href={link}
        target="_blank"
        className="min-w-[170px] px-3 py-1 rounded-lg font-bold text-base bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] flex gap-1 justify-center items-center"
      >
        <GoDownload size={20} />
        {t("download")}
      </Link>
    </div>
  );
}
