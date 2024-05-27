import ThemeChanger from "../../../ui/themePreference/ThemeChanger";
import Form from "./form/Form";
import Hr from "./Hr";
import Heading from "./Heading";
import ToRegister from "./ToRegister";
import Appear from "../../../ui/framerMotionDivs/Appear";

export default function LoginCard() {
  return (
    <Appear className="w-full max-w-xl lg:w-[65%] lg:max-w-none h-full flex justify-center items-center p-4">
      <div className="w-full max-w-lg flex flex-col justify-center items-center">
        <Heading />
        <Form />
        <Hr />
        <ToRegister />
        <ThemeChanger />
      </div>
    </Appear>
  );
}
