import BgImage from "./BgImage";
import CreatedAt from "./CreatedAt";
import EditBtn from "./EditBtn";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization";

interface Props {
  room_id: string;
}

const dataToBeReturned: IRoomIntro = {
  room_name: "name",
  room_description: "description",
  created_at: "12/12/1212",
  room_image: null,
};

export default async function Intro({ room_id }: Props) {
  const { role } = await USER();

  console.log(room_id);

  // fetch data
  // ...

  return (
    <div className="relative z-30 bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden shadow-custom | w-full h-96">
      <BgImage src={dataToBeReturned.room_image} />
      <div className="absolute top-0 left-0 p-3 py-7 w-full h-full text-white flex flex-col justify-start items-start gap-1">
        <h1 className="font-bold text-3xl line-clamp-2">
          {dataToBeReturned.room_name}
        </h1>
        <p className="text-sm line-clamp-6 mt-4">
          {dataToBeReturned.room_description}
        </p>
        <CreatedAt data={dataToBeReturned.created_at} />
        {role !== "student" && <EditBtn />}
      </div>
    </div>
  );
}
