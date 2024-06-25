import List from "./list/List";
import AddNew from "./new/AddNew";
import AddNewCategoryProvider from "../../../../../../context/providers/AddNewCategoryProvider";
import ErrorMsg from "./ErrorMsg";
import Actions from "./actions/Actions";
import { useTranslations } from "next-intl";

interface Props {
  data: Array<string>;
}

export default function Categories({ data }: Props) {
  const t = useTranslations("dashboard.pages.rooms.singlePage.settingsPage.ctg")

  return (
    <AddNewCategoryProvider prevList={data}>
      <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full flex flex-col gap-3">
        <div className="w-full flex flex-col sm:flex-row justify-start smjustify-between items-center">
          <h1 className="w-full font-bold text-2xl select-none">{t("title")}</h1>
          <Actions prevData={data} />
        </div>
        <div className="flex flex-col gap-3">
          <List />
          <AddNew />
        </div>
        <ErrorMsg />
      </div>
    </AddNewCategoryProvider>
  );
}
