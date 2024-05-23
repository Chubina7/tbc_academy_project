import ThemeChanger from "../../../ui/themePreference/ThemeChanger";
import Hr from "./Hr";
import Steps from "./steps/Steps";
import ToLogin from "./ToLogin";

export default function RegisterCard() {
  return (
    <section className="w-full max-w-xl lg:w-[65%] lg:max-w-none h-full flex justify-center items-center p-4">
      <div className="w-full max-w-lg flex flex-col justify-center items-center gap-4">
        <Steps />
        <Hr />
        <ToLogin />
        <ThemeChanger />
      </div>
    </section>
  );
}
