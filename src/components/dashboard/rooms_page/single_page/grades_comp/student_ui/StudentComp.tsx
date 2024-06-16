import Averages from "./Averages";
import Heading from "./Heading";
import SeeAllBtn from "./SeeAllBtn";

interface Props {
  room_id: string;
}

export default function StudentComp({ room_id }: Props) {
  return (
    <>
      <Heading />
      <Averages room_id={room_id} />
      <SeeAllBtn />
    </>
  );
}
