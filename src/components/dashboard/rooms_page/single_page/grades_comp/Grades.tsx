import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization";
import StudentComp from "./student_ui/StudentComp";
import TeacherComp from "./teacher_ui/TeacherComp";

export default async function Grades() {
  const { role } = await USER();

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden transition-all duration-300 p-3 shadow-custom | w-full sm:h-[398px] flex flex-col gap-6">
      {role === "student" ? <StudentComp /> : <TeacherComp />}
    </div>
  );
}
