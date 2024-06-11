import Appear from "../../../../../../ui/framerMotionDivs/Appear";
import Description from "./Description";
import Title from "./Title";

export default function GeneralInfo() {
  return (
    <Appear className="w-full max-w-4xl h-full flex flex-col justify-start items-center gap-5">
      <h1 className="w-full text-2xl sm:text-3xl text-center font-bold">Add Details</h1>
      <Title />
      <Description />
    </Appear>
  );
}
