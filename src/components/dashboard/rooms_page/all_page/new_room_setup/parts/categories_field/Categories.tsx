import Appear from "../../../../../../ui/framerMotionDivs/Appear";
import Input from "./Input";
import List from "./List";

export default function Categories() {
  return (
    <Appear className="w-full max-w-4xl h-full flex flex-col gap-5">
      <h1 className="w-full text-2xl sm:text-3xl text-center font-bold">
        Select Categories
      </h1>
      <div className="w-full flex flex-col items-center gap-5">
        <Input />
        <List />
      </div>
    </Appear>
  );
}
