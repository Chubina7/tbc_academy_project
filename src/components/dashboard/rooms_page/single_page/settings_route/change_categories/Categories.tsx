import List from "./list/List";
import AddNew from "./new/AddNew";
import AddNewCategoryProvider from "../../../../../../context/providers/AddNewCategoryProvider";
import ErrorMsg from "./ErrorMsg";
import Actions from "./actions/Actions";

interface Props {
  data: Array<string>;
}

export default async function Categories({ data }: Props) {
  return (
    <AddNewCategoryProvider prevList={data}>
      <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <h1 className="w-full font-bold text-2xl select-none">Categories</h1>
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
