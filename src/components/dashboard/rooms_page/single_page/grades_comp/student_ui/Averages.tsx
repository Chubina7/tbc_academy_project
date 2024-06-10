import AverageGrade from "./AverageGrade";
import ClassAvg from "./ClassAvg";

export default function Averages() {
  return (
    <div className="h-full flex flex-col sm:flex-row justify-evenly items-center gap-3">
      <AverageGrade avgGrade={89.7} />
      <ClassAvg avgGrade={67.4} />
    </div>
  );
}
