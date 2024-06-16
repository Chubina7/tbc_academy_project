import Heading from "./Heading";
import List from "./list/List";
import SeeAllBtn from "./SeeAllBtn";

interface Props {
  room_id: string;
}
const assignments: Array<IRoomAssignment> = [
  {
    assignment_id: "A0001",
    assignment_title: "title",
    assignment_description: "description",
    assignment_status: true,
    created_at: "12/12/1212",
    assignment_past_due: "12/12/1212",
  },
  {
    assignment_id: "A0002",
    assignment_title: "title",
    assignment_description: "description",
    assignment_status: true,
    created_at: "12/12/1212",
    assignment_past_due: "12/12/1212",
  },
  {
    assignment_id: "A0002",
    assignment_title: "title",
    assignment_description: "description",
    assignment_status: true,
    created_at: "12/12/1212",
    assignment_past_due: "12/12/1212",
  },
  {
    assignment_id: "A0002",
    assignment_title: "title",
    assignment_description: "description",
    assignment_status: true,
    created_at: "12/12/1212",
    assignment_past_due: "12/12/1212",
  },
  {
    assignment_id: "A0002",
    assignment_title: "title",
    assignment_description: "description",
    assignment_status: true,
    created_at: "12/12/1212",
    assignment_past_due: "12/12/1212",
  },
  {
    assignment_id: "A0002",
    assignment_title: "title",
    assignment_description: "description",
    assignment_status: true,
    created_at: "12/12/1212",
    assignment_past_due: "12/12/1212",
  },
  {
    assignment_id: "A0002",
    assignment_title: "title",
    assignment_description: "description",
    assignment_status: true,
    created_at: "12/12/1212",
    assignment_past_due: "12/12/1212",
  },
];

export default function Assignments({ room_id }: Props) {
  // fetch data
  // ...

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden transition-all duration-300 shadow-custom | w-full 2xl:max-w-[40%] flex flex-col gap-6">
      <Heading room_id={room_id} />
      <List data={assignments} />
      <SeeAllBtn num={assignments.length} />
    </div>
  );
}
