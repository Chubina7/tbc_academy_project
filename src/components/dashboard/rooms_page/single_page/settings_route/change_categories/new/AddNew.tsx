import AddBtn from "./AddBtn";
import Input from "./Input";
import Suggestions from "./Suggestions";
import AddNewCategoryProvider from "../../../../../../../context/providers/AddNewCategoryProvider";

export default function AddNew() {
  return (
    <AddNewCategoryProvider>
      <div className=" w-full flex gap-5">
        <div className="w-full relative z-40">
          <Input />
          <Suggestions />
        </div>
        <AddBtn />
      </div>
    </AddNewCategoryProvider>
  );
}
