import AuthDetailsChangingProvider from "../../../../../context/providers/AuthDetailsChangingProvider";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization";
import ChangeBtn from "./ChangeBtn";
import Email from "./Email";
import Password from "./Password";

export default async function AuthDetails() {
  const { password, email } = await USER();

  return (
    <AuthDetailsChangingProvider prevData={{ password, email }}>
      <div className="w-full min-h-full bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 transition-all duration-300 | flex flex-col justify-center items-center gap-5">
        <div className="w-full flex justify-between items-center gap-5">
          <h1 className="text-2xl font-semibold">Authorization</h1>
          <ChangeBtn />
        </div>
        <div className="w-full flex flex-grow flex-col sm:flex-row justify-center sm:justify-evenly items-center">
          <Email />
          <Password />
        </div>
      </div>
    </AuthDetailsChangingProvider>
  );
}
