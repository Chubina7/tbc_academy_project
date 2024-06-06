import Heading from "./Heading";
import List from "./list/List";
import SeeAllBtn from "./SeeAllBtn";

export default function Assignments() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden transition-all duration-300 p-3 shadow-custom | w-full 2xl:max-w-[40%] flex flex-col gap-6">
      <Heading />
      <List />
      <SeeAllBtn />
    </div>
  );
}
