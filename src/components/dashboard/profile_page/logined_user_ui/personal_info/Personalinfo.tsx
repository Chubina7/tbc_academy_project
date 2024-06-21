import PersonalInfoChangingProvider from "../../../../../context/providers/PersonalInfoChangingProvider";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization_acts";
import Info from "./info/Info";
import ProfilePicture from "./profile_pic/ProfilePicture";
import Actions from "./btns/Actions";

export default async function Personalinfo() {
  const { username, profile_picture, surname, birth_date } = await USER();

  return (
    <PersonalInfoChangingProvider
      prevValues={{ username, profile_picture, surname, birth_date }}
    >
      <div className="w-full min-h-[580px] bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 transition-all duration-300 | flex flex-col justify-center items-center gap-5">
        <div className="w-full flex justify-between items-center gap-5">
          <h1 className="text-2xl font-semibold">Personal Information</h1>
          <Actions />
        </div>
        <div className="w-full flex flex-grow flex-col md:flex-row justify-center items-center gap-5">
          <ProfilePicture />
          <Info />
        </div>
      </div>
    </PersonalInfoChangingProvider>
  );
}
