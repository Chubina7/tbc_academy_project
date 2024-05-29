import Heading from "./Heading";
import Attedence from "./Attedence";
import AvgPoints from "./AvgPoints";

export default function Analytics() {
  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl p-3 transition-colors duration-300 | flex flex-col gap-3 ">
      <Heading />
      <div className="w-full flex md:flex-col justify-center items-center gap-5 sm:gap-10 px-5">
        <AvgPoints />
        <Attedence />
      </div>
    </div>
  );
}
