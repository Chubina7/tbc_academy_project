import Appear from "../../../ui/framerMotionDivs/Appear";
import LangChanger from "../../../ui/languagePreference/LangChanger";
import ThemeChanger from "../../../ui/themePreference/ThemeChanger";
import Hr from "./Hr";
// import Modal from "./Modal";
import Heading from "./steps/Heading";
import Steps from "./steps/Steps";
import ToLogin from "./ToLogin";

export default function RegisterCard() {
  return (
    <>
      <Appear className="w-full max-w-xl lg:w-[65%] lg:max-w-none h-full flex justify-center items-center p-4">
        <div className="w-full max-w-lg flex flex-col justify-center items-center gap-4">
          <Heading />
          <Steps />
          <Hr />
          <ToLogin />
          <div className="flex gap-7 justify-center items-center">
            <ThemeChanger />
            <LangChanger />
          </div>
        </div>
      </Appear>
      {/* <Modal /> */}
    </>
  );
}
