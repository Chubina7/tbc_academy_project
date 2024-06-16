import Heading from "../Heading";
import SeeAllBtn from "./SeeAllBtn";
import List from "./list/List";

interface Props {
  data: Array<IRoomTeacherAvgs> | null;
}

export default function TeacherComp({ data }: Props) {
  return (
    <>
      <Heading />
      <List data={data} />
      <SeeAllBtn />
    </>
  );
}
