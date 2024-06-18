import AddBtn from "./AddBtn";
import Input from "./Input";
import Suggestions from "./Suggestions";

export default function AddNew() {
  return (
    <div className="w-full flex gap-5">
      <div className="w-full relative z-40">
        <Input />
        <Suggestions />
      </div>
      <AddBtn />
    </div>
  );
}
