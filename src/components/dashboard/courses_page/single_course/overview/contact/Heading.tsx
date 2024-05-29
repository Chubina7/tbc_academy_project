import RtoL from "../../../../../ui/framerMotionDivs/directions/RtoL";
import TopToDown from "../../../../../ui/framerMotionDivs/directions/TopToDown";

export default function Heading() {
  return (
    <div className="w-full flex justify-between items-center p-3">
      <TopToDown delay={0.7} className="font-bold text-2xl">
        Contact
      </TopToDown>
      <RtoL delay={1} className="text-sm cursor-pointer hover:underline">
        See more
      </RtoL>
    </div>
  );
}
