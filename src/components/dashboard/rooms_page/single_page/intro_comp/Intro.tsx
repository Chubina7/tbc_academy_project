import BgImage from "./BgImage";
import Title from "./Title";
import Description from "./Description";
import CreatedAt from "./CreatedAt";
import EditBtn from "./EditBtn";
import Backdrop from "./Backdrop";

export default function Intro() {
  return (
    <div className="relative bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden shadow-custom z-10 | w-full h-96">
      <BgImage />
      <Backdrop />
      <div className="absolute top-0 left-0 p-3 py-7 w-full h-full text-white flex flex-col justify-start items-start gap-1">
        <Title />
        <Description />
        <CreatedAt />
        <EditBtn />
      </div>
    </div>
  );
}
