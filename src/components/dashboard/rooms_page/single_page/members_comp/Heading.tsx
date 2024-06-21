import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization";
import Btn from "./add_new_act/Btn";

interface Props {
  room_id: string;
}

export default async function Heading({ room_id }: Props) {
  const { role } = await USER();

  return (
    <div className="w-full flex justify-between items-center p-3">
      <h1 className="w-full font-bold text-2xl">Members</h1>
      {role !== "student" && <Btn room_id={room_id} />}
    </div>
  );
}
