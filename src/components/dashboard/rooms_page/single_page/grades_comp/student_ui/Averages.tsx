import AverageGrade from "./AverageGrade";
import ClassAvg from "./ClassAvg";

interface Props {
  data: IRoomStudentAvgs | null;
}

export default function Averages({ data }: Props) {
  if (!data) return null;

  return (
    <div className="h-full flex flex-col sm:flex-row justify-evenly items-center gap-3">
      <AverageGrade avgGrade={data.user_avg} />
      <ClassAvg avgGrade={data.class_avg} />
    </div>
  );
}
