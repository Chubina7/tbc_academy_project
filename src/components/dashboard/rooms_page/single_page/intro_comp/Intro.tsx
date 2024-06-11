import BgImage from "./BgImage";
import Title from "./Title";
import Description from "./Description";
import CreatedAt from "./CreatedAt";
import EditBtn from "./EditBtn";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization";

export default async function Intro() {
  const { role } = await USER();

  return (
    <div className="relative z-30 bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden shadow-custom | w-full h-96">
      <BgImage />
      <div className="absolute top-0 left-0 p-3 py-7 w-full h-full text-white flex flex-col justify-start items-start gap-1">
        <Title />
        <Description />
        <CreatedAt />
        {role !== "student" && <EditBtn />}
      </div>
    </div>
  );
}
