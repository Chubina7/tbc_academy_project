import { useTranslations } from "next-intl";
import { IoSearch } from "react-icons/io5";

export default function SearchInput() {
  const t = useTranslations("dashboard.header");

  return (
    <div className="relative w-full md:w-fit rounded-full overflow-hidden text-sm">
      <IoSearch
        className="absolute left-0 top-2/4 translate-x-1/2 -translate-y-1/2 opacity-50"
        size={20}
        color="inherit"
      />
      <input
        type="search"
        placeholder={t("search")}
        className="bg-[#F4F7FF] text-inherit placeholder:text-inherit dark:bg-[#2A2438] dark:text-inherit |  placeholder:opacity-50 w-full sm:min-w-64 h-full p-2 pl-10 outline-none transition-all duration-300"
      />
      {/* suggestions modal */}
      <div className="absolute"></div>
    </div>
  );
}
