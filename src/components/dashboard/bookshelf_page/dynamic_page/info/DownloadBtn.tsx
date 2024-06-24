import Link from "next/link";
import { GoDownload } from "react-icons/go";

interface Props {
  link: string;
}

export default function DownloadBtn({ link }: Props) {
  return (
    <div className="w-full flex justify-end items-center">
      <Link
        href={link}
        target="_blank"
        className="px-3 py-1 rounded-lg font-bold text-base bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] flex gap-1 justify-center items-center"
      >
        <GoDownload size={20} />
        Download
      </Link>
    </div>
  );
}
