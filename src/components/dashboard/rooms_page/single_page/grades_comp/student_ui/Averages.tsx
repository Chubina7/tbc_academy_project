import AverageGrade from "./AverageGrade";
import ClassAvg from "./ClassAvg";

const dataToBeReturned = {
  user_avg: 0,
  class_avg: 0,
};

interface Props {
  room_id: string;
}

export default function Averages({ room_id }: Props) {
  console.log(room_id);
  // fetch data
  // ...

  return (
    <div className="h-full flex flex-col sm:flex-row justify-evenly items-center gap-3">
      <AverageGrade avgGrade={dataToBeReturned.user_avg} />
      <ClassAvg avgGrade={dataToBeReturned.class_avg} />
    </div>
  );
}
