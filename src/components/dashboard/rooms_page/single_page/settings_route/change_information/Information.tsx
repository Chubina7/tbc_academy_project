import ChangeDescription from "./ChangeDescription";
import ChangeTitle from "./ChangeTitle";
import Actions from "./btns/Actions";
import EditRoomInformationProvider from "../../../../../../context/providers/EditRoomInformationProvider";
import ErrorMsg from "./ErrorMsg";
import { useTranslations } from "next-intl";

interface Props {
  data: {
    title: string;
    description: string;
  };
}

export default function Information({ data }: Props) {
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.info"
  );

  return (
    <EditRoomInformationProvider prevData={data}>
      <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full flex flex-col gap-3">
        <div className="w-full flex flex-col sm:flex-row justify-start smjustify-between items-center">
          <h1 className="w-full font-bold text-2xl select-none">
            {t("title")}
          </h1>
          <Actions />
        </div>
        <form className="w-full flex flex-col gap-3">
          <ChangeTitle />
          <ChangeDescription />
          <ErrorMsg />
        </form>
      </div>
    </EditRoomInformationProvider>
  );
}
