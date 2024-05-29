import VariantsList from "../../../../../ui/framerMotionDivs/variants/VariantsList";
import MemberItem from "./MemberItem";
import Heading from "./Heading";
import Switcher from "./Switcher";
import Appear from "../../../../../ui/framerMotionDivs/Appear";

interface Props {
  data: Array<MemberComponentType>;
}

export default function Members({ data }: Props) {
  return (
    <Appear className="relative h-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-colors duration-300 | w-full flex flex-col gap-3 overflow-hidden">
      <Heading />
      <Switcher />
      <VariantsList className="w-full flex flex-col gap-3">
        {data.length >= 1 ? (
          data
            .slice(0, 4)
            .map((item) => <MemberItem key={item.user_id} data={item} />)
        ) : (
          <p className="w-full text-center pb-3">
            This course does not have students. Add new ones, now!
          </p>
        )}
      </VariantsList>
    </Appear>
  );
}
