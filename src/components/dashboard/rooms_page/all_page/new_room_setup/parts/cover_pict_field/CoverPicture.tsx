import Appear from "../../../../../../ui/framerMotionDivs/Appear";
import GenerateBtn from "./GenerateBtn";
import UploadBtn from "./UploadBtn";
import PreShow from "./PreShow";

export default function CoverPicture() {
  return (
    <Appear className="w-full max-w-4xl h-full flex flex-col gap-5">
      <h1 className="w-full text-2xl sm:text-3xl text-center font-bold">
        Upload Cover Picture
      </h1>
      <div className="w-full flex gap-3 justify-center items-center">
        <UploadBtn />
        <GenerateBtn />
      </div>
      <PreShow />
    </Appear>
  );
}
