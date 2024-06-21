import Averages from "./Averages";
import Heading from "./Heading";
import SeeAllBtn from "./SeeAllBtn";

interface Props {
  data: IRoomStudentAvgs | null;
}

export default function StudentComp({ data }: Props) {
  return (
    <>
      <Heading />
      <Averages data={data} />
      <SeeAllBtn />
    </>
  );
}
