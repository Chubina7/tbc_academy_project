import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization";
import StudentComp from "./student_ui/StudentComp";
import TeacherComp from "./teacher_ui/TeacherComp";

interface Props {
  data: {
    student_data: IRoomStudentAvgs | null;
    teacher_data: Array<IRoomTeacherAvgs> | null;
  };
}

export default async function Grades({ data }: Props) {
  const { role } = await USER();

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden transition-all duration-300 p-3 shadow-custom | w-full sm:h-[398px] flex flex-col gap-6">
      {role === "student" ? (
        <StudentComp data={data.student_data} />
      ) : (
        <TeacherComp data={data.teacher_data} />
      )}
    </div>
  );
}
