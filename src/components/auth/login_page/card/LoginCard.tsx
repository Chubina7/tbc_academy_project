import ThemeChanger from "../../../ui/themePreference/ThemeChanger";
import Form from "./form/Form";
import Hr from "./Hr";
import Heading from "./Heading";
import ToRegister from "./ToRegister";

export default function LoginCard() {
  return (
    <section className="w-full max-w-xl lg:w-[80%] lg:max-w-none h-full flex justify-center items-center p-4">
      <div className="w-full max-w-lg flex flex-col justify-center items-center">
        <Heading />
        <Form />
        <Hr />
        <ToRegister />
        <ThemeChanger />
      </div>
    </section>
  );
}
