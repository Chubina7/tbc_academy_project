import BgImage from "./BgImage";
import CreatedAt from "./CreatedAt";
import EditBtn from "./EditBtn";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization";

interface Props {
  room_id: string;
  data: IRoomIntro;
}

export default async function Intro({ data }: Props) {
  const { role } = await USER();

  return (
    <div className="relative z-30 bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden shadow-custom | w-full h-96">
      <BgImage src={data.room_image} />
      <div className="absolute top-0 left-0 p-3 py-7 w-full h-full text-white flex flex-col justify-start items-start gap-1">
        <h1 className="font-bold text-3xl line-clamp-2">{data.room_name}</h1>
        <p className="text-sm line-clamp-6 mt-4">{data.room_description}</p>
        <CreatedAt data={data.created_at} />
        {role !== "student" && <EditBtn />}
      </div>
    </div>
  );
}
