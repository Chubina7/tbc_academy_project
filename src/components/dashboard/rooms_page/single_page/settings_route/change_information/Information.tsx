import ChangeDescription from "./ChangeDescription";
import ChangeTitle from "./ChangeTitle";
import Actions from "./btns/Actions";
import EditRoomInformationProvider from "../../../../../../context/providers/EditRoomInformationProvider";
import ErrorMsg from "./ErrorMsg";

interface Props {
  data: {
    title: string;
    description: string;
  };
}

export default function Information({ data }: Props) {
  return (
    <EditRoomInformationProvider prevData={data}>
      <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full flex flex-col gap-3">
        <div className="w-full flex flex-col sm:flex-row justify-start smjustify-between items-center">
          <h1 className="w-full font-bold text-2xl select-none">Information</h1>
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
