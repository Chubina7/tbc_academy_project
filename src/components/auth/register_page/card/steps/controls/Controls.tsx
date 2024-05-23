import BackBtn from "./BackBtn";
import FinishBtn from "./FinishBtn";
import NextBtn from "./NextBtn";

export default function Controls() {
  return (
    <div className="w-full flex gap-4">
      <BackBtn />
      <NextBtn />
      <FinishBtn />
    </div>
  );
}
