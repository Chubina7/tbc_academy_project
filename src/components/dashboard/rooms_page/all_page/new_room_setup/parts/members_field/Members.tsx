import Appear from "../../../../../../ui/framerMotionDivs/Appear";
import Filter from "./Filter";
import Input from "./Input";
import List from "./list/List";

export default function Members() {
  return (
    <Appear className="w-full max-w-4xl h-full flex flex-col gap-5">
      <h1 className="w-full text-2xl sm:text-3xl text-center font-bold">
        Enroll Other Members
      </h1>
      <div className="w-full h-full flex flex-col justify-evenly items-center">
        <Input />
        <div className="w-full flex flex-col gap-3">
          <Filter />
          <List />
        </div>
      </div>
    </Appear>
  );
}
