import BackBtn from "./BackBtn";
import FinishBtn from "./FinishBtn";
import NextBtn from "./NextBtn";

export default function Controls() {
  return (
    <div className="w-full h-12 flex justify-center items-center gap-4">
      <BackBtn />
      <NextBtn />
      <FinishBtn />
    </div>
  );
}
