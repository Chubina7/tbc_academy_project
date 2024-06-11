import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization";
import Btn from "./add_new_act/Btn";

export default async function Heading() {
  const { role } = await USER();
  
  return (
    <div className="w-full flex justify-between items-center p-3">
      <h1 className="w-full font-bold text-2xl">Assignments</h1>
      {role !== "student" && <Btn />}
    </div>
  );
}
