import VariantsList from "../../../../../ui/framerMotionDivs/variants/VariantsList";
import MemberItem from "./MemberItem";
import Heading from "./Heading";
import AddNewBtn from "./AddNewBtn";

const test_students_list = [
  {
    user_id: "aaaaa",
    username: "gela",
    email: "example@gmail.com",
  },
  {
    user_id: "bbbbb",
    username: "gocha",
    email: "example@gmail.com",
  },
  {
    user_id: "ccccc",
    username: "malvinda",
    email: "example@gmail.com",
  },
  {
    user_id: "ddddd",
    username: "trulaila",
    email: "example@gmail.com",
  },
];

export default function Members() {
  return (
    <div className="relative w-full md:max-w-[40%] lg:max-w-80 bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-colors duration-300 | flex flex-col gap-3 pb-14">
      <Heading />
      <VariantsList className="w-full flex flex-col gap-3">
        {test_students_list.map((item) => (
          <MemberItem key={item.user_id} data={item} />
        ))}
        <AddNewBtn />
      </VariantsList>
    </div>
  );
}
