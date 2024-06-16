import Heading from "../Heading";
import SeeAllBtn from "./SeeAllBtn";
import List from "./list/List";

interface Props {
  room_id: string;
}

export default function TeacherComp({ room_id }: Props) {
  return (
    <>
      <Heading />
      <List room_id={room_id} />
      <SeeAllBtn />
    </>
  );
}
