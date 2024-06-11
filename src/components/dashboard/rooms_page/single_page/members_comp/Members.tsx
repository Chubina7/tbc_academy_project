import Heading from "./Heading";
import List from "./list/List";
import SeeAllBtn from "./SeeAllBtn";

export default function Members() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden transition-all duration-300 shadow-custom | w-full h-full xl:max-w-80 flex flex-col gap-6">
      <Heading />
      <List />
      <SeeAllBtn otherMembersNum={99} />
    </div>
  );
}
