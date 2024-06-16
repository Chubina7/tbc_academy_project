import Heading from "./Heading";
import List from "./list/List";
import SeeAllBtn from "./SeeAllBtn";

interface Props {
  room_id: string;
}

const dataToBeReturned: Array<IRoomAnnouncement> = [
  {
    announcement_id: "A0001",
    announcement_title: "title",
    annonced_at: "12/12/1212",
    announcement_description: "description",
    announcement_comment_num: 12,
  },
  {
    announcement_id: "A0001",
    announcement_title: "title",
    annonced_at: "12/12/1212",
    announcement_description: "description",
    announcement_comment_num: 12,
  },
  {
    announcement_id: "A0001",
    announcement_title: "title",
    annonced_at: "12/12/1212",
    announcement_description: "description",
    announcement_comment_num: 12,
  },
  {
    announcement_id: "A0001",
    announcement_title: "title",
    annonced_at: "12/12/1212",
    announcement_description: "description",
    announcement_comment_num: 12,
  },
  {
    announcement_id: "A0001",
    announcement_title: "title",
    annonced_at: "12/12/1212",
    announcement_description: "description",
    announcement_comment_num: 12,
  },
  {
    announcement_id: "A0001",
    announcement_title: "title",
    annonced_at: "12/12/1212",
    announcement_description: "description",
    announcement_comment_num: 12,
  },
  {
    announcement_id: "A0001",
    announcement_title: "title",
    annonced_at: "12/12/1212",
    announcement_description: "description",
    announcement_comment_num: 12,
  },
];

export default function Announcements({ room_id }: Props) {
  // fetch data
  // ...

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden transition-all duration-300 shadow-custom | w-full flex flex-col gap-6">
      <Heading room_id={room_id} />
      <List data={dataToBeReturned} />
      <SeeAllBtn num={dataToBeReturned.length} />
    </div>
  );
}
