import Heading from "./Heading";
import List from "./list/List";
import SeeAllBtn from "./SeeAllBtn";

interface Props {
  room_id: string;
}

const dataToBeReturned: Array<IRoomMember> = [
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
  {
    user_id: "U0001",
    username: "Name",
    surname: "Surname",
    email: "name@surname.com",
    profile_picture: null,
  },
];

export default function Members({ room_id }: Props) {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden transition-all duration-300 shadow-custom | w-full h-full xl:max-w-80 flex flex-col gap-6">
      <Heading room_id={room_id} />
      <List data={dataToBeReturned} room_id={room_id} />
      <SeeAllBtn num={dataToBeReturned.length} />
    </div>
  );
}
