import Heading from "./Heading";
import List from "./list/List";
import SeeAllBtn from "./SeeAllBtn";

interface Props {
  room_id: string;
  data: Array<IRoomAssignment>;
}

export default function Assignments({ data, room_id }: Props) {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden transition-all duration-300 shadow-custom | w-full 2xl:max-w-[40%] flex flex-col gap-6">
      <Heading room_id={room_id} />
      <List data={data} />
      <SeeAllBtn num={data.length} />
    </div>
  );
}
