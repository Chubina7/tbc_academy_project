import VariantsList from "../../../../../ui/framerMotionDivs/variants/VariantsList";
import MemberItem from "./MemberItem";
import Heading from "./Heading";
import Switcher from "./Switcher";
import Appear from "../../../../../ui/framerMotionDivs/Appear";
// import AddNewBtn from "./AddNewBtn";

const test_students_list = [
  {
    user_id: "aaaaa",
    username: "gela",
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
    <Appear className="relative h-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-colors duration-300 | w-full flex flex-col gap-3 overflow-hidden">
      <Heading />
      <Switcher />
      <VariantsList className="w-full flex flex-col gap-3">
        {test_students_list.map((item) => (
          <MemberItem key={item.user_id} data={item} />
        ))}
        {/* <AddNewBtn /> */}
      </VariantsList>
    </Appear>
  );
}
